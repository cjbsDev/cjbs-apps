import React from 'react';
import {CircularProgress} from '@mui/material';
import Box from '@mui/material/Box';

const CustomLoader = () => {
  return (
    <Box sx={{p: 5}}>
      <CircularProgress disableShrink size={25} />
    </Box>
  );
};

export default CustomLoader;
