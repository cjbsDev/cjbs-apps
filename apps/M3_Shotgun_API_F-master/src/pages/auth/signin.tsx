import type {GetServerSideProps} from 'next';
import Head from 'next/head';
import React, {useState, useContext} from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// import * as yup from "yup";
import axios from 'axios';
import router, {useRouter} from 'next/router';
import {Grid, TextField, Box, Container, Snackbar, Alert, InputAdornment, Typography} from '@mui/material';
import * as Yup from 'yup';
import {Btn} from '@src/components/atoms/button';
import {Lnk} from '@components/atoms/Link';
import {authCommonStyle} from '@styles/auth/authCommonStyle';
import CJBSLogo from '@src/pages/auth/CJBSLogo';
import {useTheme} from '@mui/material/styles';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {AuthContext} from '@src/pages/_app';
import {logoutToken} from '@hooks/token/useToken';

interface IFormInput {
  email: string;
  password: number | string;
}

const SignInPage = () => {
  const {t} = useTranslation('auth');
  const router = useRouter();
  const theme = useTheme();
  const authCmnCss = authCommonStyle(theme);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [alertMessage1, setAlertMessage1] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [severity, setSeverity] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  const signInSchema = Yup.object({
    email: Yup.string()
      // .email("유효한 이메일형식이어야 합니다.")
      .required(t('requiredID')),
    // password: yup.mixed().required(),
    password: Yup.string().required(t('requiredPassword')).min(8, t('passwordMin')).max(16, t('passwordMax')),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    //   t('loginCharPattern'),
    // ),
  }).required();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // const email = `${data.email}@cj.net`;
    const email = data.email;
    const password = data.password;
    // axios.defaults.withCredentials = false;

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, {
        email: email,
        password: password,
      })
      .then(async (res) => {
        console.log('sign in info', res);
        const signInResData = res.data.data;
        const signInResCode = res.data.code;
        console.log('Sign in Code ==>>', signInResCode);

        switch (signInResCode) {
          case 'WRONG_PASSWORD':
            handleSnackBarClick(signInResCode);
          case 'NOT_EXIST':
            handleSnackBarClick(signInResCode);
          default:
            authContext.save(signInResData.tokenDto, router);
        }
        //토큰을 쿠키에 저장한 다음, 주소 '/'으로 이동
        // authContext.save(signInResData.tokenDto, router);
      })
      .catch((error) => {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log('error1', error.response.data);
          console.log('error2', error.response.status);
          console.log('error3', error.response.headers);

          if (error.response.data.code === 'ATTEMPTED_TEMP_PASSWORD') {
            console.log('ATTEMPTED_TEMP_PASSWORD');
            router.push('/auth/changePassword');
          }

          if (error.response.status === 401) {
            setSeverity(true);
          }

          console.log();
          // setAlertMessage1(false);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log('error4', error.request);
          // setAlertMessage1(true);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log('error5', error.message);
        }
        // console.log('error6', error.config);

        // handleSnackBarClick();
        // if (error.response.data.code === 'WRONG_PASSWORD') {
        //   handleSnackBarClick('WRONG_PASSWORD');
        // } else if (error.response.data.code === 'WRONG_EMAIL') {
        //   handleSnackBarClick('WRONG_EMAIL');
        // } else {
        //   handleSnackBarClick('LOCKED');
        // }
      });
  };

  const handleSnackBarClick = (message) => {
    setSnackBarOpen(true);
    setWarningMessage(
      message === 'NOT_EXIST' ? '계정이 존재하지 않습니다. 회원가입을 해주세요!' : '비밀번호 오류입니다.',
    );
  };

  const handleSnackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false);
    setWarningMessage('');
  };

  return (
    <>
      <Head>
        <title>{t('siginin')} | Shotgun Metagenomics</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxWidth={false} className={authCmnCss.backgroundCJ}>
        <CJBSLogo width={254} height={45} />

        <Box
          component='form'
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className={authCmnCss.authFormWidth}
          style={{maxWidth: 380}}
        >
          <Grid container>
            {/* <Grid item xs={12}>
              <H5>{t('signin')}</H5>
            </Grid> */}
            <Grid item xs={12}>
              <Controller
                render={({field}) => (
                  <TextField
                    {...field}
                    error={errors.email && true}
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    // label={t('id')}
                    label={'Email'}
                    type='email'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    size='medium'
                    // InputProps={{
                    //   endAdornment: <InputAdornment position='start'>@cj.net</InputAdornment>,
                    // }}
                  />
                )}
                control={control}
                name='email'
                defaultValue=''
              />
              {errors.email && <Alert severity='error'>{errors.email.message}</Alert>}
            </Grid>

            <Grid item xs={12}>
              <Controller
                render={({field}) => (
                  <TextField
                    {...field}
                    size='medium'
                    error={errors.password && true}
                    margin='normal'
                    required
                    fullWidth
                    label={t('password')}
                    type='password'
                    id='password'
                    autoComplete='current-password'
                  />
                )}
                control={control}
                name={'password'}
                defaultValue=''
              />
              {errors.password && <Alert severity='error'>{errors.password.message}</Alert>}
            </Grid>
            <Btn
              type='submit'
              color='primary'
              endIconName='check'
              // label={t('signinBtn')}
              label='Log in'
              size='xlarge'
              startIconName='check'
              variant='contained'
              sx={{mt: 3, mb: 3, textTransform: 'capitalize'}}
              fullWidth={true}
            />
            <Grid container spacing={3} sx={{justifyContent: 'space-between', mb: 2}}>
              <Grid item>
                <a href={'https://www.ezbiocloud.net/forgotPassword?from=mydata'} target={'_blank'}>
                  {/*{t('forgetPassword')}*/}
                  Forget Password
                </a>
              </Grid>
              <Grid item>
                <a href={'https://www.ezbiocloud.net/signup?from=mydata'} target={'_blank'}>
                  {/*{t('signup')}*/}
                  Sign Up
                </a>
                {/*<Lnk linkName={t('signup')} href='/user/signup' />*/}
              </Grid>
            </Grid>
            <Box>
              <Alert severity={severity ? 'error' : 'info'}>
                During this beta test, only <b>cj.net</b> and <b>ezbiome.com</b> accounts are allowed access. If you
                don't have either of these, please sign-up
              </Alert>
            </Box>
          </Grid>
        </Box>
      </Container>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleSnackBarClose} severity='error' sx={{width: '100%'}}>
          {warningMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {req, res, locale, resolvedUrl, query} = context;

  console.log('###ShotgunAPI-Service###');
  const {name, job} = query;
  console.log('query value ==>>', name, job);

  logoutToken(req, res);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
    },
  };
};
