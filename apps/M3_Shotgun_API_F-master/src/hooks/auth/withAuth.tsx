import {getRefreshToken, isExpired, renewAccessToken} from '@hooks/token/useToken';
import axios from 'axios';
import {setToken, getToken} from '@hooks/token/useToken';
import {getLayout} from '@components/layouts/AppLayout';

const withAuth = (gssp) => {
  return async (context) => {
    const {req, res} = context;

    let accessToken = getToken(req, res);
    console.log('##### accessToken =>', accessToken);

    if (!accessToken) {
      console.log('AccessToken Empty');

      const isRenew = await renewAccessToken(req, res);

      if (isRenew.success) {
        setToken(isRenew.tokens, req, res);
      } else {
        return {
          redirect: {
            destination: '/auth/signin',
            permanent: false,
          },
        };
      }
    } else {
      //토큰이 있으면 검증을  수행한다. 검증 실패시 액세스 토큰을 갱신한다.
      const isVerfiy = isExpired(accessToken);
      console.log('#### Token exist, isVerfiy => ', isVerfiy);
      if (!isVerfiy) {
        const isRenew = await renewAccessToken(req, res);
        if (isRenew.success) {
          setToken(isRenew.tokens, req, res);
        } else {
          console.log('[Auth] auth fail');

          return {
            redirect: {
              destination: '/auth/signin',
              permanent: false,
            },
          };
        }
      }
    }

    return await gssp(context);
  };
};

export default withAuth;
