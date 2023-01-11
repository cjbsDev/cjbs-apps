import React, {useState, useCallback, useEffect, Suspense} from 'react';
import {getLayout} from '@components/layouts/AppLayoutNew';
import {Box, Toolbar, IconButton} from '@mui/material';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Snb from '@components/molecules/Snb';
import {AccBox} from '@styles/styledComp';
import CustomLoader from '@components/comp/CustomLoader';
import {useRecoilState} from 'recoil';
import {userInfoAtom} from '@src/recoil/atoms/userAtom';
import {hello} from 'designtokens-cjbs-it';

const DynamicProfileLists = dynamic(() => import('@components/organisms/DataTableGrid/ProfileLists'), {
  suspense: true,
});

const ShotgunPage = ({userInfoData}) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [pIdValue, setPIdValue] = useState<string[]>([]);
  const [openSnb, setOpenSnb] = useState(true);
  // const {user, isError, isLoading} = useUserInfo();
  // const {data, error, mutate} = useSWR('/shotgun/job/run/status', fetcher, {
  //   refreshInterval: 0,
  // });

  // useUserInfo(userInfoData);

  // snb 접는 기능
  // const handleDrawerOpen = useCallback(() => {
  //   setOpenSnb(true);
  // }, []);
  //
  // const handleDrawerClose = useCallback(() => {
  //   setOpenSnb(false);
  // }, []);

  // const handlePidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log('ddsfd', event.target.value);
  //   const string = event.target.value;
  //   const stringToArray = string.split('\n');
  //   const emptyValueRemoveArray = stringToArray.filter((item) => {
  //     // 값이 있는 배열만 포함해서 새로운 배열을 만듬, 값이 없는것에 대해서는 호출되지 않는다.
  //     console.log('What is item?', item);
  //     return item;
  //   });
  //   console.log('문자열을 줄바꿈 기준으로 새로운 배열 생성->', stringToArray);
  //   console.log('새로 만든 배열에 값이 없는 부분은 삭제하고 새로운 배열 생성->', emptyValueRemoveArray);
  //
  //   setPIdValue(emptyValueRemoveArray);
  // };

  return (
    <>
      <Head>
        <title>Shotgun Metagenomics trtrtrtrr</title>
      </Head>

      <Snb open={openSnb} />

      <Box component={'main'} sx={{flexGrow: 1, px: 0, mt: 6}}>
        <Box sx={{p: 0, m: 3, mt: 3, mb: 0}}>
          {/*<Toolbar sx={{height: 50}} />*/}
          {/*snb 접는 기능*/}
          {/*<IconButton onClick={handleDrawerClose}>*/}
          {/*  <ChevronLeft />*/}
          {/*</IconButton>*/}
          {/*<IconButton onClick={handleDrawerOpen}>*/}
          {/*  <ChevronRight />*/}
          {/*</IconButton>*/}

          <Suspense
            fallback={
              <AccBox>
                <CustomLoader />
              </AccBox>
            }
          >
            <DynamicProfileLists />
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

ShotgunPage.getLayout = getLayout;

export default ShotgunPage;
