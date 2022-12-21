import {useState, useEffect} from 'react';
import {deleteCookie, getCookie, setCookie} from 'cookies-next';
//Crypto
import CryptoJS from 'crypto-js';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import {throws} from 'assert';
import axios, {Axios} from 'axios';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export const CKEY = 'saasHYMSSW';
export const RKEY = 'saasIT';
export const MKEY = 'saasMARVEL';
// 운영(saas-react)에 반영 할때 -> master branch
// export const DOMAIN = 'ezbiocloud.net';

// 개발(saas-react_dev)에 반영 할때 -> dev branch
export const DOMAIN = 'cjbioscience.com';

/* [decryptAes256 이벤트 함수 정의] */
function decryptAes256(secretKey, Iv, data) {
  // [aes 디코딩 수행 실시 : cbc 모드]
  const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
    iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
  });

  // [인코딩 된 데이터 확인 실시]
  return cipher.toString(CryptoJS.enc.Utf8);
}

function encryptAes256(secretKey, Iv, data) {
  // [aes 인코딩 수행 실시 : cbc 모드]
  const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
    iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
  });

  // [인코딩 된 데이터 확인 실시]
  return cipher.toString();
}

function decodePayload(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(Buffer.from(base64, 'base64').toString());
}

export function getUserId() {
  const [userID, setUserID] = useState('');

  useEffect(() => {
    const tkInfo = getToken();
    const payload = decodePayload(tkInfo);
    setUserID(payload.userId);
  }, []);

  return userID;
}

export function isExpired(token) {
  //임시로
  if (!token) {
    console.log('Not found token');
    return false;
  }
  //const decrypt = decryptAes256(`${process.env.NEXT_PUBLIC_CKEY}`, `${process.env.NEXT_PUBLIC_CIV}`, token)
  const payload = decodePayload(token);

  //console.log( new Date(payload.exp * 1000) );
  var expiredDate = dayjs.unix(payload.exp).tz('Asia/Seoul');
  var nowDate = dayjs();

  const diffMinute = expiredDate.diff(nowDate, 'm');

  console.log('##### expiredDate > ', expiredDate.format('YYYY MM DD HH mm ss'));
  console.log('##### nowDate     > ', nowDate.format('YYYY MM DD HH mm ss'));
  if (diffMinute <= 1) {
    return false;
  } else {
    return true;
  }
}

export function getToken(req = null, res = null) {
  console.log('getToken');

  try {
    const encryptAccessToken = req ? getCookie(CKEY, {req, res}) : getCookie(CKEY);
    return decryptAes256(`${process.env.NEXT_PUBLIC_CKEY}`, `${process.env.NEXT_PUBLIC_CIV}`, encryptAccessToken);
  } catch (err) {
    console.log();
    return null;
  }
}

export function getRefreshToken(req = null, res = null) {
  console.log('getRefresh');

  try {
    const encryptToken = req ? getCookie(RKEY, {req, res}) : getCookie(RKEY);
    const refreshToken = decryptAes256(
      `${process.env.NEXT_PUBLIC_CKEY}`,
      `${process.env.NEXT_PUBLIC_CIV}`,
      encryptToken,
    );
    console.log('refreshToken =>', refreshToken);
    return refreshToken;
  } catch (err) {
    return null;
  }
}

export function setToken(tokenInfo, req, res) {
  const {accessToken, refreshToken, rfExpires} = tokenInfo;

  const rfExpiresDate = new Date(rfExpires);

  const options = req
    ? {
        req,
        res,
        expires: rfExpiresDate,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : false,
        domain: process.env.NODE_ENV === 'production' ? DOMAIN : 'localhost',
      }
    : {
        expires: rfExpiresDate,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : false,
        domain: process.env.NODE_ENV === 'production' ? DOMAIN : 'localhost',
      };
  const encryptAccessToken = encryptAes256(
    `${process.env.NEXT_PUBLIC_CKEY}`,
    `${process.env.NEXT_PUBLIC_CIV}`,
    accessToken,
  );
  const encryptRefreshToken = encryptAes256(
    `${process.env.NEXT_PUBLIC_CKEY}`,
    `${process.env.NEXT_PUBLIC_CIV}`,
    refreshToken,
  );

  deleteCookie(CKEY, {req, res});
  setCookie(CKEY, encryptAccessToken, options);

  deleteCookie(RKEY, {req, res});
  setCookie(RKEY, encryptRefreshToken, options);
}

export function logoutToken(req = null, res = null) {
  console.log('Logout!');
  if (req) {
    deleteCookie(RKEY, {req, res});
    deleteCookie(CKEY, {req, res});
  } else {
    deleteCookie(RKEY);
    deleteCookie(CKEY);
  }
}

export const renewAccessToken = async (req, res) => {
  return new Promise(async function (resolve, reject) {
    // 데이터를 받으면 resolve() 호출
    let refreshToken = await getRefreshToken(req, res);

    if (!refreshToken) return resolve({success: false});

    const URL = req
      ? `${process.env.NEXT_PUBLIC_API_URL2}/token/accessToken`
      : `${process.env.NEXT_PUBLIC_API_URL}/token/accessToken`;

    const response = await axios.get(URL, {
      headers: {
        emSW: refreshToken,
      },
      validateStatus: function (status) {
        // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
        console.log('renew status => ', status);
        return (status >= 200 && status < 300) || status === 401;
      },
    });
    if (response.status === 200 && response.data.success) {
      const data = response.data.data;

      return resolve({
        success: true,
        tokens: data,
      });
    } else {
      return resolve({
        success: false,
        axios: response,
      });
    }
  });
};
