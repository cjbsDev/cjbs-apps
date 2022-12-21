import React from 'react';
import {Box, CircularProgress} from '@mui/material';
import AppBarType1 from '@components/organisms/appBar';
import useUserInfo from '@hooks/user/useUserInfo';
import CustomLoader from '@components/comp/CustomLoader';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const AppLayout = ({children}) => {
  const {user, isError, isLoading} = useUserInfo();

  if (isLoading)
    return (
      <Box sx={{p: 2, display: 'flex', justifyContent: 'center'}}>
        <CircularProgress disableShrink size={20} />
      </Box>
    );

  return (
    <Box sx={{height: '100%', minHeight: '100%', display: 'flex'}}>
      <AppBarType1 userInfo={user}>{children}</AppBarType1>
      {children}
    </Box>
  );
};

export const getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default AppLayout;
