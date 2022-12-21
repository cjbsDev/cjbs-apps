import React, {useState} from 'react';
import Head from "next/head";
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Alert, Avatar, Box, Container, Grid, Snackbar, TextField, Typography} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Btn} from "@src/components/atoms/button";
import {authCommonStyle} from "@styles/auth/authCommonStyle";
import CJBSLogo from "@src/pages/auth/CJBSLogo";

interface IFormInput {
  email: string;
  authCode: number;
}

const PasswordFindPage = () => {
  
  const authCmnCss = authCommonStyle();
  const router = useRouter();
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);

  const passWordFindSchema = Yup.object({
    email: Yup.string()
      .email("유효한 이메일형식이어야 합니다.")
      .required("이메일은 필수 입력 입니다."),
    authCode: Yup.number()
  }).required();

  const {register, control, handleSubmit, formState: {errors},} = useForm<IFormInput>({
    defaultValues: {
      email: "",
      authCode: undefined
    },
    resolver: yupResolver(passWordFindSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/user/sendTempPassword`, data)
      .then((res) => {
        console.log("res!!!", res.data);
        if(res.data.code === "OK"){
          setIsSendEmail(true)
        }
        // removeCookies('emHYMSSW');
        // removeCookies('emIT');
      //  signOut();
      //  router.push('/signinCJBS');
      })
      .catch((error) => {
        console.log("Sign in error -->", error.response.data.code);
        switch (error.response.data.code) {
          case 'NOT_EXIST':
            handleSnackBarClick();
        }
      });
  };

  const handleSnackBarClick = () => {
    setSnackBarOpen(true);
  };

  const handleSnackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false);
  };

  const onClickConfirm = () => {

  }

  return (
    <>
      <Head>
        <title>EzMx-비밀번호 찾기</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Container maxWidth={false} className={authCmnCss.backgroundCJ}>
        <CJBSLogo/>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className={authCmnCss.authFormWidth}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                {/*<LockOutlinedIcon/>*/}
                {"비밀번호 찾기"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Controller
                render={({field}) => (
                  <TextField
                    {...field}
                    error={errors.email && true}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    type="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                )}
                control={control}
                name="email"
                defaultValue=""
              />
              {errors.email && (
                <Alert severity="error">{errors.email.message}</Alert>
              )}
            </Grid>
            {/* {
              isSendEmail &&
              <Grid item xs={12}>
                <Controller
                  render={({field}) => (
                    <TextField
                      {...field}
                      error={errors.authCode && true}
                      margin="normal"
                      required
                      fullWidth
                      id="authCode"
                      label="인증번호"
                      type="text"
                      name="authCode"
                      autoComplete="email"
                      autoFocus
                    />
                  )}
                  control={control}
                  name="authCode"
                />
                {errors.authCode && (
                  <Alert severity="error">{errors.email.message}</Alert>
                )}
              </Grid>
            } */}
            <Grid item xs={12}>
              <Btn
                type="submit"
                color="primary"
                endIconName="check"
                label="확인"
                size="large"
                startIconName="check"
                variant="contained"
                sx={{mt: 3, mb: 2}}
                fullWidth={true}
                onClick={onClickConfirm}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signinCJBS">
                로그인
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{mt: 3}}>
          <Typography component="p" variant="body2">입력하신 이메일로 임시비밀번호가 발송 되었습니다.</Typography>
          <Typography component="p" variant="body2">임시비밀번호로 로그인시 비밀번호 변경을 권장 합니다.</Typography>
        </Box>
      </Container>

      <Snackbar open={snackBarOpen} autoHideDuration={3000} onClose={handleSnackBarClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}>
        <Alert onClose={handleSnackBarClose} severity="warning" sx={{width: '100%'}}>
          이메일을 잘 못 입력하였습니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default PasswordFindPage;
