import React, {useEffect, useState} from 'react';
import {GetServerSideProps} from 'next';
import Head from 'next/head';
import {Container, Grid, Typography, Card, CardHeader, CardContent, Chip} from '@mui/material';
import {red, green, lightBlue, grey, blue} from '@mui/material/colors';
import axios from 'axios';
import {useSetRecoilState, useRecoilState} from 'recoil';
import Box from '@mui/material/Box';
import {userInfoAtom} from '@src/recoil/atoms/userAtom';
import {dashboardNewStyled} from '@styles/dashboard/dashboardNewStyled';
import {commonStyled} from '@styles/common/commonStyled';
import {Masonry} from 'masonic';
import ArrowDash from '@public/svg/icon/arrowDash.svg';
import ArrowUp from '@public/svg/icon/arrowUp.svg';
import {motion} from 'framer-motion';
import {getToken} from '@hooks/token/useToken';
import useWindowSize from '@components/fnc/useWindowSize';
import useSWR from 'swr';
import {fetcher} from '@components/fnc/fetcher';
import CustomLoader from '@components/comp/CustomLoader';
import CJParallaxAni from '@components/pages/dashboard/CJParallxAni';
import EZMXDataLists from '@components/pages/dashboard/EZMXDataLists';
import DashboardHeader from '@components/pages/dashboard/DashboardHeader';
import VideoBg from '@components/pages/dashboard/VideoBg';
import {getLayout} from '@components/layouts/AppLayout';
import DashboardPage from '@src/pages/indexOG';
import withAuth from '@src/hooks/auth/withAuth';

const fakeData = [
  {
    id: 0,
    name: 'mason0',
    age: 41,
    introduce:
      '국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다. 국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다.',
  },
  {
    id: 1,
    name: 'mason1',
    age: 42,
    introduce:
      '국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다.',
  },
  {
    id: 2,
    name: 'mason2',
    age: 43,
    introduce:
      '이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 대통령의 선거에 관한 사항은 법률로 정한다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이 있거나 의장이 국가의 안전보장을 위하여 필요하다고 인정할 때에는 공개하지 아니할 수 있다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
  },
  {
    id: 3,
    name: 'mason3',
    age: 44,
    introduce:
      '국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수 있다.',
  },
  {
    id: 4,
    name: 'mason4',
    age: 45,
    introduce:
      '대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
  },
  {
    id: 5,
    name: 'mason5',
    age: 46,
    introduce:
      '국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.',
  },
];

const DashboardNewPage = ({userInfoData, accessToken}) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const dashboardCss = dashboardNewStyled();
  const cmnCss = commonStyled();
  const {data, error} = useSWR('/dashboard/numberOfServices', fetcher, {
    refreshInterval: 1000,
    // refreshInterval: isProcessing ? 1000 : 0,
    // onSuccess: ({status}) => {
    //   setIsProcessing(status === 'processing');
    // },
  });

  useEffect(() => {
    setUserInfo({
      userLevel: userInfoData.authorities[0].authorityName,
      userName: userInfoData.nickname,
      userEmail: userInfoData.email,
    });
  }, []);

  const MasonryCard = ({index, data: {id, name, age, introduce}, width}) => (
    <Card sx={{p: 3, py: 3.5, borderRadius: 5, boxShadow: '2px 2px 10px #e8e8e8', shadowOpacity: 0.8}}>
      <CardHeader
        disableTypography={true}
        sx={{
          borderBottomWidth: 0.8,
          borderBottomColor: grey[300],
          borderBottomStyle: 'solid',
          p: 0,
          pb: 1,
          fontWeight: '900',
          fontSize: 24,
        }}
        title={'Strain Bank'}
      />
      <CardContent sx={{p: 0, pt: 3, pb: 0, m: 0}}>
        <Grid container sx={{mb: 2}}>
          <Grid item>
            <dl className={dashboardCss.cntDL2}>
              <dd>
                <Box sx={{mr: 1.5}}>3,881</Box>
                <Chip
                  icon={<ArrowUp fill={'white'} width={10} height={7} />}
                  label={'17%'}
                  size={'small'}
                  color={'error'}
                  sx={{borderRadius: 3, fontSize: 16}}
                />

                <Box
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    height: 25,
                    backgroundColor: grey[600],
                    px: 1,
                    borderRadius: 3,
                  }}
                >
                  <ArrowDash width={11} height={2} fill={'white'} />
                </Box>
              </dd>
              <dt>Strains</dt>
            </dl>
          </Grid>
        </Grid>

        <Box>
          <dl className={dashboardCss.dsItemsDL}>
            <dt>species</dt>
            <dd>415</dd>
            <dt>GSTs</dt>
            <dd>48</dd>
            <dt>gene clusters</dt>
            <dd>23</dd>
            <dt>gene clusters covered</dt>
            <dd>98%</dd>
            <dt>pathways covered</dt>
            <dd>98%</dd>
            <dt>coverage of species</dt>
            <dd>1,002,890</dd>
            <dt>coverage of GSTs</dt>
            <dd>48</dd>
            <dt>Biomarkers covered</dt>
            <dd>23</dd>
            <dt>strains with WGS</dt>
            <dd>98%</dd>
            <dt>strains with 16S</dt>
            <dd>98%</dd>
          </dl>
        </Box>

        {/*<Typography>Id: {id}</Typography>*/}
        {/*<Typography>Name: {name}</Typography>*/}
        {/*<Typography>Age: {age}</Typography>*/}
        {/*<Typography variant={'body1'} sx={{wordBreak: 'all', whiteSpace: 'normal'}}>{introduce}</Typography>*/}
      </CardContent>
    </Card>
  );

  if (error)
    return (
      <Box className={cmnCss.absCenter}>
        <Typography variant={'subtitle1'}>An error has occurred.</Typography>
      </Box>
    );

  if (!data)
    return (
      <Box className={cmnCss.absCenter}>
        <CustomLoader />
      </Box>
    );

  return (
    <Box sx={{height: '100vh'}}>
      <Head>
        <title>Ez-Mx</title>
        <meta
          name='description'
          content='Reference database / Microbial strain resources / Omics data / Discovery algorithm (incl.AI)'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box sx={{backgroundColor: ''}} component={'main'}>
        <VideoBg />

        <Box className={dashboardCss.wrapSearch}>
          <Container sx={{pt: 12}}>
            <DashboardHeader />

            <EZMXDataLists data={data} />
          </Container>
        </Box>

        <Box sx={{backgroundColor: grey[0]}}>
          <Container>
            <Typography
              variant={'body1'}
              sx={{
                mb: 5,
                pt: 0,
                fontSize: 30,
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              Dashboard
            </Typography>

            <Masonry items={fakeData} columnGutter={25} columnWidth={300} overscanBy={5} render={MasonryCard} />
          </Container>
        </Box>
        {/* 스크롤 다운시 Parallax 애니메이션 */}
        <CJParallaxAni />
      </Box>
    </Box>
  );
};

DashboardNewPage.getLayout = getLayout;
export default DashboardNewPage;

export const getServerSideProps = withAuth(async (context) => {
  const {req, res} = context;
  const {cookies} = req;
  const accessToken = getToken(req, res);
  const apiUserInfoUrl = `${process.env.NEXT_PUBLIC_API_URL2}/user/info`;

  if (!accessToken) {
    console.log('access token empty. go signin!');
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const resUserInfo = await axios.get(apiUserInfoUrl, config);
  const userInfoData = resUserInfo.data.data;

  return {
    props: {
      userInfoData: userInfoData,
      accessToken: accessToken,
    },
  };
});
