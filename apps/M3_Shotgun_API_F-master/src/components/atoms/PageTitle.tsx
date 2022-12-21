import React from 'react';
import {Typography} from '@mui/material';

interface TitleProps {
  titleName?: string;
}

const PageTitle = ({titleName}: TitleProps) => {
  return (
    <Typography variant='subtitle1' component='h2' sx={{fontSize: 22}}>
      {titleName}
    </Typography>
  );
};

export default PageTitle;
