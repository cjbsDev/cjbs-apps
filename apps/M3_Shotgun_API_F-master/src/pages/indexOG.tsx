import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import router from 'next/router';
import Link from 'next/link';
import {dashboardStyles} from '@styles/dashboard/dashboardStyle';
import axios from 'axios';
import {useSetRecoilState, useRecoilState} from 'recoil';
import Box from '@mui/material/Box';
import {getLayout} from '@components/layouts/AppLayout';
import {userInfoAtom} from '@src/recoil/atoms/userAtom';
import {Container, Grid, Toolbar, Typography, Stack, Snackbar, Avatar, SnackbarOrigin, Button} from '@mui/material';
import {Btn} from '@components/button/Btn';
import {IconBtn} from '@components/atoms/button/IconBtn';
import CountUp from 'react-countup';
import {getToken} from '@hooks/token/useToken';
import withAuth from '@src/hooks/auth/withAuth';
import Layout from '@src/components/layouts/layout';
import {GET} from '@src/hooks/api/useAPI';
import {AuthContext} from '@src/pages/_app';
import {grey} from '@mui/material/colors';
import {setCookie} from 'cookies-next';

const DashboardPage = ({data, strainCount, hubCount, studyCount}) => {
  const [open, setOpen] = useState<boolean>(false);
  const setUserInfo = useSetRecoilState(userInfoAtom);

  const dashboardCss = dashboardStyles();
  const {numberOfStrains, numberOfSpecies} = strainCount;
  const {numberOfEngineOutputs, numberOfUploadedInputs} = hubCount;
  const {numberOfStudy, numberOfSample} = studyCount;
  useEffect(() => {
    setUserInfo({
      userLevel: data.authorities[0].authorityName,
      userName: data.nickname,
      userEmail: data.email,
    });
    // console.log(numberOfStrains, numberOfSpecies);
  }, []);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <Head>
        <title>Shotgun-API-Service</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        {/*<Container>*/}
        {/*  <Container maxWidth={'sm'}>*/}
        {/*    <Box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>*/}
        {/*      <Typography variant={'h1'} sx={{mb:2}}>Shotgun API Service</Typography>*/}
        {/*      <Box>*/}
        {/*      <Button*/}
        {/*        variant={'outlined'}*/}
        {/*        onClick={() => router.push('/Shotgun')}*/}
        {/*      >*/}
        {/*        Shotgun API Service Enter!*/}
        {/*      </Button>*/}
        {/*      </Box>*/}
        {/*    </Box>*/}
        {/*  </Container>*/}
        {/*</Container>*/}
        <Box className={dashboardCss.wrapSearch}>
          <Container sx={{position: 'relative'}}>
            <Toolbar />
            <Typography variant={'h2'} color='white' sx={{mb: 1}}>
              Ez-Mx
            </Typography>
            <Btn
              label={'About Ez-Mx'}
              size={'small'}
              variant={'outlined'}
              sx={{color: 'white', borderColor: 'white'}}
              // color={'primary'}
              endIconSize={16}
              endIconName={'cheveron-right'}
              endIcon={true}
              onClick={() => setOpen(true)}
            />

            <Box sx={{position: 'absolute', top: 63, right: 25}}>
              <Typography variant={'h3'} color='white' sx={{fontSize: 22}}>
                Notice
              </Typography>
              <ul className={dashboardCss.noticeUl}>
                <li>
                  <Link href={'#'}>
                    <a onClick={() => setOpen(true)}>[균주뱅크] Strain 상세 정보 추가</a>
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <a onClick={() => setOpen(true)}>[균주뱅크] Taxon 상세 정보 추가</a>
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    <a onClick={() => setOpen(true)}>[TOOLS] FILOVISTA 신규 추가</a>
                  </Link>
                </li>
              </ul>
            </Box>
          </Container>
        </Box>

        <Box sx={{backgroundColor: grey[0], pt: 5}}>
          <Container>
            <Typography variant={'h3'} sx={{mb: 1, pt: 0}}>
              Dashboard
            </Typography>

            <Grid container spacing={3} sx={{pb: 6}}>
              <Grid item xs={4}>
                <Box className={dashboardCss.wrapDashboardBox}>
                  <Typography variant={'h3'} className={dashboardCss.boxTitle}>
                    HUB
                  </Typography>

                  <Grid container sx={{mb: 1}}>
                    <Grid item xs={6}>
                      <dl className={dashboardCss.cntDl}>
                        <dd>
                          <Typography variant={'h3'}>
                            <CountUp duration={0.3} end={numberOfUploadedInputs} separator={','} />
                          </Typography>
                        </dd>
                        <dt>
                          <Typography variant={'body2'}>Total Data</Typography>
                        </dt>
                      </dl>
                    </Grid>
                    <Grid item xs={6}>
                      <dl className={dashboardCss.cntDl}>
                        <dd>
                          <Typography variant={'h3'}>
                            <CountUp duration={0.3} end={numberOfEngineOutputs} separator={','} />
                          </Typography>
                        </dd>
                        <dt>
                          <Typography variant={'body2'}>Engine Run</Typography>
                        </dt>
                      </dl>
                    </Grid>
                  </Grid>
                  <IconBtn
                    icon='cheveron-right'
                    iconSize={24}
                    color='secondary'
                    onClick={() => router.push('/hub')}
                    sx={{
                      position: 'absolute',
                      right: 15,
                      top: 18,
                    }}
                  />
                  {/*<Btn label={'업로드'} variant={'outlined'} color={'secondary'} size={'small'} disabled={true} />*/}
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box className={dashboardCss.wrapDashboardBox}>
                  <Typography variant={'h3'} className={dashboardCss.boxTitle}>
                    연구관리
                  </Typography>

                  <Grid container sx={{mb: 1}}>
                    <Grid item xs={6}>
                      <dl className={dashboardCss.cntDl}>
                        <dd>
                          <Typography variant={'h3'}>
                            <CountUp duration={0.3} end={numberOfStudy} separator={','} />
                          </Typography>
                        </dd>
                        <dt>
                          <Typography variant={'body2'}>Research</Typography>
                        </dt>
                      </dl>
                    </Grid>
                    <Grid item xs={6}>
                      <dl className={dashboardCss.cntDl}>
                        <dd>
                          <Typography variant={'h3'}>
                            <CountUp duration={0.3} end={numberOfSample} separator={','} />
                          </Typography>
                        </dd>
                        <dt>
                          <Typography variant={'body2'}>Sample</Typography>
                        </dt>
                      </dl>
                    </Grid>
                  </Grid>
                  <IconBtn
                    icon='cheveron-right'
                    iconSize={24}
                    color='secondary'
                    onClick={() => router.push('/cris')}
                    sx={{
                      position: 'absolute',
                      right: 15,
                      top: 18,
                    }}
                  />
                  {/*<Stack spacing={1} direction={'row'}>*/}
                  {/*  <Btn label={'샘플관리'} variant={'outlined'} color={'secondary'} size={'small'} disabled={true} />*/}
                  {/*  <Btn label={'입고관리'} variant={'outlined'} color={'secondary'} size={'small'} disabled={true} />*/}
                  {/*</Stack>*/}
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box className={dashboardCss.wrapDashboardBox}>
                  <Typography variant={'h3'} className={dashboardCss.boxTitle}>
                    균주뱅크
                  </Typography>

                  <Grid container sx={{mb: 1}}>
                    <Grid item xs={6}>
                      <dl className={dashboardCss.cntDl}>
                        <dd>
                          <Typography variant={'h3'}>
                            <CountUp duration={0.3} end={numberOfStrains} separator={','} />
                          </Typography>
                        </dd>
                        <dt>
                          <Typography variant={'body2'}>Strains</Typography>
                        </dt>
                      </dl>
                    </Grid>
                    <Grid item xs={6}>
                      <dl className={dashboardCss.cntDl}>
                        <dd>
                          <Typography variant={'h3'}>
                            <CountUp duration={0.3} end={numberOfSpecies} separator={','} />
                          </Typography>
                        </dd>
                        <dt>
                          <Typography variant={'body2'}>Species</Typography>
                        </dt>
                      </dl>
                    </Grid>
                  </Grid>
                  <IconBtn
                    icon='cheveron-right'
                    iconSize={24}
                    color='secondary'
                    onClick={() => router.push('/strain')}
                    sx={{
                      position: 'absolute',
                      right: 15,
                      top: 18,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box sx={{backgroundColor: '#efefef', pt: 5, pb: 5}}>
          <Container>
            <Typography variant={'h3'} sx={{mb: 1, pt: 2}}>
              Tools
            </Typography>
            <Grid container>
              <Grid item xs={2}>
                <Avatar alt='Filovista' src='img/tools/filovistaThum.png' sx={{width: 130, height: 130}} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant={'subtitle1'}>Filovista</Typography>
                <Typography variant={'body1'} sx={{mb: 1}}>
                  Phylogenetic tree viewer. Filovista is an online tool for visualizing phylogenetic tree in newick
                  format. The tool can visualize a newick tree, resize space, adjust scale, display labels, and download
                  a figure file. To start using Filovista, please upload a file or paste a text in newick format.
                </Typography>
                <Btn
                  label={'바로가기'}
                  size={'small'}
                  variant={'outlined'}
                  // sx={{color: 'gray', borderColor: 'gray'}}
                  color={'secondary'}
                  endIconSize={16}
                  endIconName={'cheveron-right'}
                  endIcon={true}
                  onClick={() => router.push('/phyloCanvas/treeViewIfrm')}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>

      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={open}
        autoHideDuration={800}
        onClose={handleClose}
        message='준비중 입니다.'
      />
    </Box>
  );
};

export default DashboardPage;
DashboardPage.getLayout = getLayout;
export const getServerSideProps = withAuth(async (context) => {
  const {req, res} = context;
  // const accessToken = getToken(req, res)
  const apiUrl2 = '/user/info';
  const apiServiceCount = '/dashboard/numberOfServices';

  const resUserInfo = () => GET(apiUrl2, req, res);
  const resServiceCount = () => GET(apiServiceCount, req, res);
  const arrData = await axios.all([resUserInfo(), resServiceCount()]);

  const userInfoData = await arrData[0].data.data;
  const serviceCountData = await arrData[1].data.data;

  console.log('resServiceCount', serviceCountData);

  return {
    props: {
      data: userInfoData,
      hubCount: serviceCountData.hub,
      strainCount: serviceCountData.strain,
      studyCount: serviceCountData.study,
    },
  };
});
