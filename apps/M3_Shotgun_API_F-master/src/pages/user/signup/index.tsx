import React, {useMemo, useState} from 'react';
import {useRouter} from 'next/router';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import axios from 'axios';
import Head from 'next/head';
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
  Alert,
  Snackbar,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import {authCommonStyle, alertColor, successColor, subTextColor} from '@styles/auth/authCommonStyle';
import CJBSLogo from '@src/pages/auth/CJBSLogo';
import {Btn} from '@src/components/atoms/button';
import {Lnk} from '@components/atoms/Link';
//다국어
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

interface IFormInputs {
  email: string;
  password: number | string;
  confirmPassword: number | string;
  nickname: string;
}

interface StateTextColorProps {
  chck: boolean;
  duplicate: boolean;
}

const SignupPage = () => {

  const {t} = useTranslation(['auth', 'common']);
  const router = useRouter();
  const authCmnCss = authCommonStyle();
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [nickChck, setNickChck] = useState<boolean>(false);
  const [nickNameDuplicate, setNickNameDuplicate] = useState<boolean>(false);
  const [nickNameMessage, setNickNameMessage] = useState<string>(t('nicknamePattern'));
  const [idChck, setIdChck] = useState<boolean>(false);
  const [idDuplicate, setIdDuplicate] = useState<boolean>(false);
  const [idMessage, setIdMessage] = useState<string>(t('onlyCjEmail'));
  const [alertMessage1, setAlertMessage1] = useState(false);
  const [alertMessage2, setAlertMessage2] = useState(false);

  const signUpSchema = Yup.object({
    email: Yup.string()
      // .email('유효한 이메일형식이어야 합니다.')
      .required(t('requiredID')),
    password: Yup.string()
      .required(t('requiredPassword'))
      .min(8, t('passwordPattern'))
      .max(16, t('passwordPattern'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&^]{8,16}$/,
        t('passwordPattern'),
      ),
    confirmPassword: Yup.string()
      .required(t('requiredPasswordConfirm'))
      .oneOf([Yup.ref('password')], t('passwordMatch')),
    nickname: Yup.string()
      .required(t('requiredNickname'))
      .min(2, t('nicknameMin'))
      .max(16, t('nicknameMax'))
      .matches(/^[가-힣ㄱ-ㅎa-zA-Z0-9._ -]{2,16}/, t('nicknamePattern')),
  }).required();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: {errors},
  } = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log('Sign up Data->', data);
    console.log('sdfsdfsdfsdfsd', nickChck);
    const sendData = {
      password: data.password,
      nickname: data.nickname,
      email: `${data.email}@cj.net`,
    };

    if (!nickChck) {
      console.log('닉네임 중복체크를 해주세요!');
      setAlertMessage1(false);
      handleSnackBarClick();
    } else {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, sendData)
        .then((res) => {
          console.log('>>>', res);
          router.push('/auth/signin');
        })
        .catch((error) => {
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log('error1', error.response.data);
            console.log('error2', error.response.status);
            console.log('error3', error.response.headers);
            if (error.response.status === 400) {
              console.log('Already ID!');
              setAlertMessage2(true);
            }
          } else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log('error4', error.request);
          } else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('error5', error.message);
          }
          console.log('error6', error.config);

          // handleSnackBarClick(); 아이디 중복 메세지 나와야 함!!
        });

      // await router.push('/auth/signin');
    }
  };

  const nickNameDuplicateCheck = async () => {
    const getNickName = getValues('nickname');
    console.log(getNickName);
    if (getNickName !== '' && getNickName.length >= 2 && getNickName.length <= 16) {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/user/checkNickname?nickname=${getNickName}`)
        .then((res) => {
          console.log('Available Nickname!');
          setNickChck(true);
          setNickNameDuplicate(false);
          setNickNameMessage(t('availableNickname'));
          // setNickNameMessage(`${getNickName}는 사용 가능합니다.`);
        })
        .catch((error) => {
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log('error1', error.response.data);
            console.log('error2', error.response.status);
            console.log('error3', error.response.headers);
            if (error.response.status === 400) {
              console.log('Duplicate Nickname!');
              setNickChck(true);
              setNickNameDuplicate(true);
              setNickNameMessage(t('nicknameInUse'));
            }
          } else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log('error4', error.request);
            setAlertMessage1(true);
          } else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('error5', error.message);
          }
          console.log('error6', error.config);

          // handleSnackBarClick();
        });
    } else {
      setNickChck(true);
      setNickNameDuplicate(true);
      setNickNameMessage(t('requiredNickname'));
    }
  };

  const onBlurID = async () => {
    console.log('onBlurID!');
    const getEmail = getValues('email');
    const userId = `${getEmail}@cj.net`;
    console.log('userId', userId);

    if (getEmail === '') {
      setIdChck(true);
      setIdDuplicate(true);
      setIdMessage('아이디를 입력하세요!');
    } else if (getEmail !== '') {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/user/emailDuplicateCheck?email=${userId}`)
        .then((res) => {
          console.log(res.data.code);
          console.log('res.data.code', res.data.code);
          if (res.data.code === 'OK') {
            console.log('사용 가능한 아이디 입니다.');
            setIdChck(true);
            setIdDuplicate(false);
            setIdMessage(t('availableID'));
          }
          // if (res.data.code === 'DUPLICATE_EMAIL') {
          //   console.log('중복 아이디 입니다.');
          //   setIdChck(true);
          //   setIdDuplicate(true);
          //   setIdMessage(t('idInUse'));
          // }
        })
        .catch((error) => {
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log('error1', error.response.data);
            console.log('error2', error.response.status);
            console.log('error3', error.response.headers);
            if (error.response.status === 400) {
              console.log('$$$$$$$$');
              console.log('Duplicate Email!');
              setIdChck(true);
              setIdDuplicate(true);
              setIdMessage(t('idInUse'));
            }
          } else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log('error4', error.request);
            setAlertMessage1(true);
            handleSnackBarClick();
          } else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('error5', error.message);
          }
          console.log('error6', error.config);

          // handleSnackBarClick();
        });
    }
  };

  const onBlurNickName = () => {
    const getNickName = getValues('nickname');
    console.log('getNickName Value', getNickName);
    setNickNameMessage('');
    setNickChck(false);
  };

  const handleSnackBarClick = () => {
    // console.log('res err message', errTxt)
    setSnackBarOpen(true);
    // errTxt === 'WRONG_PASSWORD' ? setAlertMessage1(true) : errTxt === 'WRONG_EMAIL' ? setAlertMessage2(true) : setAlertMessage3(true);
  };

  const handleSnackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false);

    // setAlertMessage1(false);
    // setAlertMessage2(false);
    // setAlertMessage3(false);
  };

  const stateTextColorStyle1 = () => ({
    mx: 1.5,
    fontSize: 14,
    color: idChck === false ? subTextColor : idDuplicate ? alertColor : successColor,
  });

  const stateTextColorStyle2 = () => ({
    mx: 1.5,
    fontSize: 14,
    color: nickChck === false ? subTextColor : nickNameDuplicate ? alertColor : successColor,
  });

  return (
    <>
      <Head>
        <title>EzMx-Sign up</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxWidth={false} className={authCmnCss.backgroundCJ}>
        <CJBSLogo />
        <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} className={authCmnCss.authFormWidth}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
              <H5>회원가입</H5>
            </Grid> */}
            <Grid item xs={12}>
              <Controller
                render={({field}) => (
                  <>
                    <TextField
                      {...field}
                      required
                      fullWidth
                      error={errors.email && true}
                      id='email'
                      label={t('id')}
                      type='email'
                      name='email'
                      autoComplete='email'
                      InputProps={{
                        endAdornment: <InputAdornment position='start'>@cj.net</InputAdornment>,
                      }}
                      onBlur={onBlurID}
                    />
                    <FormHelperText id='outlined-weight-helper-text' sx={stateTextColorStyle1}>
                      {idMessage}
                    </FormHelperText>
                  </>
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
                  <>
                    <TextField
                      {...field}
                      required
                      fullWidth
                      error={errors.password && true}
                      name='password'
                      label={t('password')}
                      type='password'
                      id='password'
                      autoComplete='new-password'
                    />
                    <FormHelperText id='outlined-weight-helper-text' sx={{mx: 1.5, fontSize: 14, color: subTextColor}}>
                      {t('passwordPattern')}
                    </FormHelperText>
                  </>
                )}
                control={control}
                name={'password'}
                defaultValue=''
              />
              {errors.password && <Alert severity='error'>{errors.password.message}</Alert>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                render={({field}) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    error={errors.confirmPassword && true}
                    name='confirmPassword'
                    label={t('confirmPassword')}
                    type='password'
                    id='confirmPassword'
                    autoComplete='re-password'
                  />
                )}
                control={control}
                name={'confirmPassword'}
                defaultValue=''
              />
              {errors.confirmPassword && <Alert severity='error'>{errors.confirmPassword.message}</Alert>}
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Controller
                    render={({field}) => (
                      <>
                        <TextField
                          {...field}
                          required
                          fullWidth
                          error={errors.nickname && true}
                          id='nickname'
                          label={t('nickname')}
                          name='nickname'
                          autoComplete='nick-name'
                          onBlur={onBlurNickName}
                        />
                        <FormHelperText id='outlined-weight-helper-text' sx={stateTextColorStyle2}>
                          {nickNameMessage}
                        </FormHelperText>
                      </>
                    )}
                    control={control}
                    name='nickname'
                    defaultValue=''
                  />
                </Grid>
                <Grid item xs={4} sx={{}}>
                  <Btn
                    color='primary'
                    label={t('nicknameCheck')}
                    variant='contained'
                    sx={{display: 'flex', textTransform: 'capitalize'}}
                    fullWidth={true}
                    size='xlarge'
                    onClick={nickNameDuplicateCheck}
                  />
                </Grid>
              </Grid>

              {errors.nickname && <Alert severity='error'>{errors.nickname.message}</Alert>}
            </Grid>

            {/*<Grid item xs={12}>*/}
            {/*  <Box sx={{*/}
            {/*    display: 'flex',*/}
            {/*    justifyContent: 'flex-end',*/}
            {/*  }}>*/}
            {/*    <Typography*/}
            {/*      variant="subtitle2"*/}
            {/*      component="span"*/}
            {/*      sx={{*/}
            {/*        mx: 2,*/}
            {/*        color: nickChck === false ? 'black' : nickNameDuplicate === true ? 'red' : 'green'*/}
            {/*      }}>*/}
            {/*      {nickNameMessage}*/}
            {/*    </Typography>*/}
            {/*  </Box>*/}
            {/*</Grid>*/}

            <Grid item xs={12}>
              <Btn
                type='submit'
                color='primary'
                endIconName='check'
                label={t('signup')}
                size='xlarge'
                startIconName='check'
                variant='contained'
                sx={{mt: 0, mb: 3, textTransform: 'capitalize'}}
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Lnk linkName={t('alreadyID')} href='/auth/signin' />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleSnackBarClose} severity='error' sx={{width: '100%'}}>
          {alertMessage1 === true ? t('serverError') : t('checkNickname')}
          {/*{*/}
          {/*  alertMessage2 === true ? '아이디를 확인해 주세요!' : null*/}
          {/*}*/}
        </Alert>
      </Snackbar>
    </>
  );
};

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'common'])),
  },
});

export default SignupPage;
