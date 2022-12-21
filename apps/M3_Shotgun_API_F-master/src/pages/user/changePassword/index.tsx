import React from 'react';
import {getNoneSidebarLayout} from "@components/layouts/NoneSidebarLayout";
import {Alert, Box, Button, Container, Divider, Grid, TextField, Typography} from "@mui/material";
import {useRouter} from 'next/router';
import {useForm, Controller, SubmitHandler, useWatch} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import {makeStyles} from "@mui/styles";
import {GetServerSideProps} from "next";
import {removeCookies} from "cookies-next";

const useStyles = makeStyles({
  vhCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // height: '100vh',
  },
  titCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

interface IFormInputs {
  currentPassword: number | string;
  newPassword: number | string;
  confirmNewPassword: number | string;
}

const passwordChangeSchema = Yup.object({
  currentPassword: Yup.string().required('현재 사용중인 비밀번호를 입력해주세요'),
  newPassword: Yup.string()
    .required('새 비밀번호는 필수 입력란입니다.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      '하나 이상의 대소문자, 숫자, 특수문자를 포함한 8자리에서 16자리로 만들어 주세요.'
    ),
  confirmNewPassword: Yup.string()
    .required('새 비밀번호확인은 필수 입력란입니다.')
    .oneOf([Yup.ref('newPassword')], '비밀번호가 일치해야합니다!'),
}).required();

const PasswordChangePage = ({accessJwt, userInfo}) => {
  const classes = useStyles();
  const router = useRouter();
  const {register, control, handleSubmit, getValues, setValue, watch, formState: {errors}} = useForm<IFormInputs>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    resolver: yupResolver(passwordChangeSchema)
  });

  const onSubmit: SubmitHandler<IFormInputs> = async data => {
    const sendData = {
      "nowPassword": data.currentPassword,
      "newPassword": data.newPassword,
    };
    console.log('Password Change Data->', sendData);

    await axios.put('http://13.125.12.94:9000/user/changePassword', sendData, {
      headers: {
        Authorization: `Bearer ${accessJwt}`
      }
    })
      .then(res => {
        console.log('>>>', res);
        removeCookies('emHYMSSW');
        removeCookies('emIT');
        router.push('/');
      })
      .catch(err => {
        console.log('err!@!', err.message);
      });
  };
  return (
    <>
      <Head>
        <title>EzMx-비밀번호 변경</title>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Container maxWidth="xs" className={classes.vhCenter}>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
          <Box sx={{background: 'white', borderRadius: 1, p: 2, mb: 4, minHeight: 100}}>
            비밀번호를 변경하면 모두 로그아웃 됩니다.<br/>
            새로운 비밀번호로 다시 로그인해 주세요.<br/>
            
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sx={{mb: 3}}>
              <Controller render={({field}) => <TextField {...field} required
                                                          fullWidth
                                                          name="currentPassword"
                                                          label="현재 비밀번호"
                                                          type="password"
                                                          id="currentPassword"
                                                          autoComplete="currentPassword"/>}
                          control={control} name={'currentPassword'} defaultValue=""/>
              {errors.currentPassword && <Alert severity="error">{errors.currentPassword.message}</Alert>}
            </Grid>

            <Grid item xs={12}>
              <Controller render={({field}) => <TextField {...field} required
                                                          fullWidth
                                                          name="newPassword"
                                                          label="새 비밀번호"
                                                          type="password"
                                                          id="newPassword"
                                                          autoComplete="newPassword"/>}
                          control={control} name={'newPassword'} defaultValue=""/>
              {errors.newPassword && <Alert severity="error">{errors.newPassword.message}</Alert>}
            </Grid>
            <Grid item xs={12}>
              <Controller render={({field}) => <TextField {...field} required
                                                          fullWidth
                                                          name="confirmNewPassword"
                                                          label="새 비밀번호 확인"
                                                          type="password"
                                                          id="confirmNewPassword"
                                                          autoComplete="re-newPassword"/>}
                          control={control} name={'confirmNewPassword'} defaultValue=""/>
              {errors.confirmNewPassword && <Alert severity="error">{errors.confirmNewPassword.message}</Alert>}
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            size="large"
          >
            확인
          </Button>
        </Box>
      </Container>
    </>
  );
};

PasswordChangePage.getLayout = getNoneSidebarLayout;

export default PasswordChangePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {req, res} = context;
  const {cookies} = req
  const apiUserInfo = 'http://13.125.12.94:9000/user/info';
  // const refreshJwt = cookies['emIT'];
  const accessJwt = cookies['emHYMSSW'];

  if (accessJwt === undefined) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const userInfoData = await axios.get(apiUserInfo, {
    headers: {
      Authorization: `Bearer ${accessJwt}`
    }
  });

  const userInfo = userInfoData.data.data;

  console.log(userInfo);

  return {
    props: {
      userInfo: userInfo,
      accessJwt: accessJwt,
    }
  };
};
