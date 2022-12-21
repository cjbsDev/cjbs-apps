import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import {getToken, isExpired, logoutToken, renewAccessToken, setToken} from '@hooks/token/useToken';
import {NextApiRequest, NextApiResponse} from 'next';
import axios, {AxiosResponse, Method} from 'axios';

interface GET_API {
  (url: string, req?: NextApiRequest, res?: NextApiResponse): Awaited<Promise<any>>; //TODO any가 아니라 AxiosResponse 교체
}
// get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

interface POST_API {
  (url: string, data: Object | null, req?: NextApiRequest, res?: NextApiResponse): Awaited<Promise<any>>;
}

interface REQUEST_API {
  (method: Method, url: string, data: Object | null, req?: NextApiRequest, res?: NextApiResponse): Awaited<
    Promise<any>
  >;
}

export const GET: GET_API = async function (url: string, req?: NextApiRequest, res?: NextApiResponse) {
  console.log('GET! :: URL  => ', url);
  return await request('get', url, null, req, res);
};

export const POST: POST_API = async function (url: string, data?: JSON, req?: NextApiRequest, res?: NextApiResponse) {
  console.log('POST! :: URL  => ', url);
  console.log('POST! :: DATA => ', data);
  return await request('post', url, data, req, res);
};

export const PUT: POST_API = async function (url: string, data?: JSON, req?: NextApiRequest, res?: NextApiResponse) {
  console.log('PUT! :: URL  => ', url);
  console.log('PUT! :: DATA => ', data);
  return await request('put', url, data, req, res);
};

export const request: REQUEST_API = async function (
  method: Method,
  url: string,
  data?: JSON,
  req?: NextApiRequest,
  res?: NextApiResponse,
) {
  return new Promise(async function (resolve, reject) {
    let accessToken = null;
    let makedURL = null;
    if (req) {
      makedURL = `${process.env.NEXT_PUBLIC_API_URL2}${url}`;
      accessToken = getToken(req, res);
    } else {
      makedURL = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
      accessToken = getToken();
    }

    isExpired(accessToken);

    if (accessToken === null) {
      let renew = await renewAccessToken(req, res);
      if (renew.success) {
        setToken(renew.tokens, req, res);
        accessToken = renew.tokens.accessToken;
      } else {
        logoutToken();
        // if (typeof window !== 'undefined') {
        //   !req && window.location.replace('/auth/signin');
        // }
        !req && window.location.replace('/auth/signin');
        return resolve(renew.axios);
      }
    }

    const apiRes = await axios({
      url: makedURL,
      method: method,
      data: data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      validateStatus: function (status) {
        // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
        console.log('status => ', status);
        return (status >= 200 && status < 300) || status === 401;
      },
    });

    if (apiRes.status === 401) {
      let renew = await renewAccessToken(req, res);
      if (renew.success) {
        setToken(renew.tokens, req, res);
        accessToken = renew.tokens.accessToken;
      } else {
        //로그아웃처리 해야함, 쿠키에서 토큰삭제함
        logoutToken();
        console.log('###! renew', renew);
        // if (typeof window !== 'undefined') {
        //   !req && window.location.replace('/auth/signin');
        // }
        !req && window.location.replace('/auth/signin');
        return resolve(renew);
      }

      return resolve(
        await axios({
          url: makedURL,
          method: method,
          data: data,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          validateStatus: function (status) {
            // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
            console.log('status => ', status);
            return (status >= 200 && status < 300) || status === 401;
          },
        }).catch(function (e) {
          if (e.response.status === 401) {
          }
        }),
      );
    }

    return resolve(apiRes);
  });
};
