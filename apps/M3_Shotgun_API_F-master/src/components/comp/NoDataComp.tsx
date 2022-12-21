import React from 'react';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';

const noDataComp = () => {
  return (
    <Box sx={{py: 20, width:'100%', height:'750px', display:'flex', justifyContent: 'center' }}>
       <Typography variant='h5'>No results were found.</Typography>
    </Box>
  );
};

export default noDataComp; 
