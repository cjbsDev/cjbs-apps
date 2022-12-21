import React, {useEffect} from 'react';
import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';
import Router from 'next/router';
import {ThemeProvider} from '@mui/material/styles';
import {themeJeju} from '@components/variables/themeJeju';
import 'public/styles/global.scss'; //global.scss will affect the entire app.
import Layout from '@components/layouts/layout';
import {RecoilRoot} from 'recoil';
import axios from 'axios';
import {CssBaseline} from '@mui/material';
import NProgress from 'nprogress';
import '@public/styles/nprogress.css';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
// import {ParallaxProvider, useParallax} from 'react-scroll-parallax';

//다국어
import {appWithTranslation} from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config.js';
import {setToken} from '@hooks/token/useToken';

//CORS 이슈로 false로 해야함!!!
axios.defaults.withCredentials = false;
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const AuthContext = React.createContext(null);

function EzMx({Component, pageProps}: AppPropsWithLayout) {
  const [authState, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SAVE':
          console.log('SWITCH SAVE !!');
          return {
            ezmxHY: action.ezmxHY,
          };
        case 'INIT':
          console.log('INIT !!!!@@!!@ ');

          return {
            ezmxHY: null,
          };
      }
    },
    {
      ezmxHY: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      save: (tokens, router) => {
        setToken(tokens, null, null);
        dispatch({
          type: 'SAVE',
          ezmxHY: null,
        });
        setTimeout(() => {
          router.push('/');
        }, 0);
      },
      init: () => {
        dispatch({
          type: 'INIT',
        });
      },
    }),
    [],
  );

  // const authContext = React.useMemo(
  //   () => ({
  //     save: (ezmxHY, router) => {
  //       console.log("SAVE !!");

  //       dispatch({
  //         type: "SAVE",
  //         ezmxHY:ezmxHY
  //       })
  //       setTimeout(() =>{
  //         router.push('/')
  //       }, 2000)

  //     },
  //     init: () => {
  //       dispatch({
  //         type: "INIT"
  //       })
  //     },
  // }), []);

  // const [mode, setMode] = React.useState<PaletteMode>("light");
  // const colorMode = React.useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );
  // // Update the theme only if the mode changes
  // const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    // 페이지 이동간에 딜레이 시간이 있을때 Progressbar 보여주는 로직
    // 페이지 로드가 0.5초 이상 걸릴 때만 표시
    const delay = 500;
    let timer;

    const load = (url) => {
      console.log(`Loading: ${url}`);
      timer = setTimeout(() => {
        NProgress.start();
      }, delay);
    };

    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };

    Router.events.on('routeChangeStart', (url) => load(url));
    Router.events.on('routeChangeComplete', () => stop());
    Router.events.on('routeChangeError', () => stop());

    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
      trickleRate: 0.02,
      trickleSpeed: 800,
    });
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthContext.Provider value={{...authContext, ...authState}}>
      <RecoilRoot>
        <ThemeProvider theme={themeJeju}>
          {/*CssBaseline 모든 브라우저에서 동일한 스타일로 보이도록 설정 한다.*/}
          <CssBaseline />
          {/*<ParallaxProvider>*/}
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          {/*</ParallaxProvider>*/}
        </ThemeProvider>
      </RecoilRoot>
    </AuthContext.Provider>
  );
}

export default appWithTranslation(EzMx);
