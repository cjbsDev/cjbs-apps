import React, {Suspense, useState} from 'react';
import {getLayout} from '@components/layouts/AppLayoutNew';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {grey} from '@mui/material/colors';
import {Box, Typography} from '@mui/material';
import CustomLoader from '@components/comp/CustomLoader';
import {AccBox} from '@styles/styledComp';
import Snb from '@components/molecules/Snb';
import GridHeader from '@components/pages/profiles/GridHeader';
const DynamicStudyDatabaseLists = dynamic(() => import('@components/organisms/StudyDatabaseLists'), {
  suspense: true,
});

// const useHandleChange = () => {
//   const [checked, setChecked] = useState(false);
//
//   const dddd = (init) => {
//     console.log('Click init ==>', init);
//     setChecked((prev) => !prev);
//   };
//
//   return {checked, dddd};
// };

const DataWarehousePage = () => {
  const [openSnb, setOpenSnb] = useState(true);

  return (
    <>
      <Head>
        <title>Data Warehouse | Shotgun Metagenomics</title>
      </Head>

      <Snb open={openSnb} />

      <Box component={'main'} sx={{flexGrow: 1, px: 0, height: '100vh', backgroundColor: grey[100]}}>
        <Box sx={{p: 0, m: 3, mt: 9}}>
          <GridHeader titleName={'DATA WAREHOUSE'} />
          <Typography variant='body1' sx={{whiteSpace: 'pre-line'}}>
            {`The Study Database is a repository of microbiome taxonomic profiles (MTPs) produced by CJ Bioscience’s MTP pipeline from public whole genome shotgun sequences. 
            Use your account to compare your MTPs with these reference MTPs.`}
          </Typography>

          <Suspense
            fallback={
              <AccBox>
                <CustomLoader />
              </AccBox>
            }
          >
            <DynamicStudyDatabaseLists />
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

DataWarehousePage.getLayout = getLayout;

export default DataWarehousePage;
