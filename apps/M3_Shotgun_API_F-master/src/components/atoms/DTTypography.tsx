import React from 'react';
import {Typography} from '@mui/material';

interface DTProps {
  titleCode: string;
}

const DTTypography = ({titleCode}: DTProps) => {
  return (
    <Typography
      component={'dt'}
      variant={'body2'}
      color={'secondary'}
    >
      {titleCode}
    </Typography>
  );
};

export default DTTypography;
