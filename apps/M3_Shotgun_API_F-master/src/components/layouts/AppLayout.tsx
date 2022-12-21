import React, {useState} from 'react';
import SideBar from '@components/layouts/Sidebar';
import {Box, Chip, CssBaseline, Drawer, Grid, Toolbar, Typography} from '@mui/material';
import Footer from '@components/layouts/Footer';
import {styled} from '@mui/material/styles';
import {lightBlue, grey, red, blue, green, deepOrange, cyan, amber, yellow, deepPurple} from '@mui/material/colors';
import AppBarType1 from '@components/organisms/appBar';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const AppLayout = ({children}) => {
  return (
    <Box sx={{height: '100%', minHeight: '100%'}}>
      <AppBarType1>{children}</AppBarType1>

      <Box
        sx={{
          // flexGrow: 1,
          // mt: 6,
          // pb: 5,
          pt: 3,
          // flex: 1,
          display: 'flex',
          flexDirection: 'column',
          // height: '100%',
          minHeight: '100%',
          // overflow: 'hidden',
          // backgroundColor: grey[200],
        }}
      >
        {children}
      </Box>
      {/*<Footer/>*/}
    </Box>
  );
};

export const getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AppLayout;
