import React from 'react';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {amber, blue, cyan, green, red} from '@mui/material/colors';

interface DataTableTitleProps {
  titleName: string,
  totalCount?: number,
}

const DataTableTitle = ({titleName, totalCount}: DataTableTitleProps) => {
  const localeTotalCount = totalCount ? totalCount.toLocaleString() : 0;
  return (
    <Typography variant={'body1'} sx={{fontWeight: '600', fontSize: 24}}>
      {titleName}
      {
        totalCount !== undefined && <Box
          component={'b'}
          sx={{fontSize: 20}}
        >({localeTotalCount})
        </Box>
      }
    </Typography>
  );
};

export default DataTableTitle;
