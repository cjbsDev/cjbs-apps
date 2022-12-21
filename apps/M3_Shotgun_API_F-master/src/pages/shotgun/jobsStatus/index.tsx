import React, {Suspense, useState} from 'react';
import {getLayout} from '@components/layouts/AppLayoutNew';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {grey} from '@mui/material/colors';
import {Box} from '@mui/material';
import CustomLoader from '@components/comp/CustomLoader';
import {AccBox} from '@styles/styledComp';
import Snb from '@components/molecules/Snb';

const DynamicJobsDataGrid = dynamic(() => import('@components/organisms/DataTableGrid/JobsStatusLists'), {
  suspense: true,
});

const JobsStatusPage = () => {
  const [openSnb, setOpenSnb] = useState(true);
  return (
    <>
      <Head>
        <title>Jobs Status | Shotgun Metagenomics</title>
      </Head>

      <Snb open={openSnb} />

      <Box component={'main'} sx={{flexGrow: 1, px: 0, height: '100vh', backgroundColor: grey[100]}}>
        <Box sx={{p: 0, m: 3, mt: 9}}>
          <Suspense
            fallback={
              <AccBox>
                <CustomLoader />
              </AccBox>
            }
          >
            <DynamicJobsDataGrid />
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

JobsStatusPage.getLayout = getLayout;

export default JobsStatusPage;
