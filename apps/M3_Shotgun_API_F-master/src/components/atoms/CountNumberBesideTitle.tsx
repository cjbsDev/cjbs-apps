import React from 'react';
import {Box, Typography} from '@mui/material';

interface TotalCountProps {
  totalCount?: number;
}

const CountNumberBesideTitle = ({totalCount = 0}: TotalCountProps) => {
  return (
    <Typography variant='body1' component='span'>
      ({totalCount.toLocaleString()})
    </Typography>
  );
};

export default CountNumberBesideTitle;
