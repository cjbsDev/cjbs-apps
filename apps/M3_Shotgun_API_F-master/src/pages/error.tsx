import Head from "next/head";
import React from "react";
import {authCommonStyle} from "@styles/auth/authCommonStyle";
import {Container, Typography} from "@mui/material";

const Error = ({statusCode}) => {
  const authCmnCss = authCommonStyle();
  return (
    <>
      <Head>
        <title>EzMx-{statusCode}Error</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Container maxWidth={false} className={authCmnCss.backgroundCJ}>
        <Typography variant="h3" gutterBottom component="div">
          {
            statusCode ? `Server ${statusCode} Error 발생 (ㅜ.ㅜ)!` : 'Client Error 발생 (ㅜ.ㅜ)!'
          }
        </Typography>
        <Typography variant="body1" gutterBottom>신속하게 처리 하겠습니다.</Typography>
        <Typography variant="body1" gutterBottom>관리자에게 문의 주세요.</Typography>
      </Container>
    </>
  )
}

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
}

export default Error;
