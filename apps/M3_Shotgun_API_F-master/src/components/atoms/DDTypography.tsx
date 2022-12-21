import React from 'react';
import {Typography} from '@mui/material';

interface DDProps {
  valueCode: string;
}

const DDTypography = ({valueCode}: DDProps) => {
  // console.log('valueCode', valueCode);
  return (
    <Typography
      component={'dd'}
      variant={'body1'}
    >
      {valueCode === null ? '-' : valueCode}
    </Typography>
  );
};

export default DDTypography;
