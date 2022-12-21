import React, {createContext, useContext} from 'react';
import {Box, Typography} from '@mui/material';
import DTTypography from '@components/atoms/DTTypography';
import DDTypography from '@components/atoms/DDTypography';

const DLBoxContext = createContext(undefined);

const useDLBoxContext = () => {
  const context = useContext(DLBoxContext);

  if (!context) {
    throw new Error('Child components of DLBox cannot be rendered outside the DLBox component!');
  }

  return context;
};

const DLBox = ({children}) => {
  return (
    <DLBoxContext.Provider value={''}>
      <Box component={'dl'}>
        {children}
      </Box>
    </DLBoxContext.Provider>
  );
};

const DT = ({titleCode}) => {
  return <DTTypography titleCode={titleCode} />;
};

const DD = ({valueCode}) => {
  return <DDTypography valueCode={valueCode} />;
};

const DTSmall = ({titleCode}) => {
  return <Typography variant={'body2'} color={'secondary'} sx={{mr: 2}}>{titleCode}</Typography>;
};

const DDSmall = ({valueCode}) => {
  return <Typography variant={'body2'}>{valueCode === null ? '-' : valueCode}</Typography>;
};

DLBox.DT = DT;
DLBox.DTSmall = DTSmall;
DLBox.DD = DD;
DLBox.DDSmall = DDSmall;

export default DLBox;
