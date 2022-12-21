import React from 'react';
import {Typography} from '@mui/material';

const DashboardHeader = () => {
  return (
    <div>
      <Typography variant={'h1'} sx={{mb: 1, textAlign: 'center'}}>Ez-Mx</Typography>

      <Typography variant={'body1'} sx={{mb: 5, textAlign: 'center'}}>
        Reference database / Microbial strain
        resources / Omics data / Discovery
        algorithm (incl.AI)</Typography>
    </div>
  );
};

export default DashboardHeader;
