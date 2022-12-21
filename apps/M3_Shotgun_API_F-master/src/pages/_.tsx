import Head from "next/head";
import React from "react";
import {authCommonStyle} from "@styles/auth/authCommonStyle";
import {Container, Typography} from "@mui/material";
import {GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Lnk} from "@components/atoms/Link";

const Error = () => {
  const authCmnCss = authCommonStyle();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>EzMx-404Error</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Container maxWidth={false} className={authCmnCss.backgroundCJ}>
        <Typography variant="h3" gutterBottom component="div">
          404 - 없는 페이지 입니다.
        </Typography>
        <Lnk linkName="메인으로" href="/"/>
      </Container>
    </>
  )
}

export default Error;

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     redirect: {
//       destination: '/',
//       permanent: false,
//     }
//   }
// }
