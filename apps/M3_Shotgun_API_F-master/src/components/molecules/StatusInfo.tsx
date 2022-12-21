import React from 'react';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {amber, blue, cyan, green, red} from '@mui/material/colors';

interface StatusHiddenProps {
  requestHdn?: boolean,
  waitingHdn?: boolean,
  analyzingHdn?: boolean,
  completeHdn?: boolean,
  errorHdn?: boolean,
}

const StatusNameWrap = styled(Box)({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  justifyContent: 'flex-end',
  '& li': {
    marginLeft: 15,
  },
});

const StatusNameList = styled(Box)({
  'p span': {
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  '&:nth-of-type(1)': {
    'p span': {
      backgroundColor: amber[800],
    },
  },
  '&:nth-of-type(2)': {
    'p span': {
      backgroundColor: cyan[600],
    },
  },
  '&:nth-of-type(3)': {
    'p span': {
      backgroundColor: green[600],
    },
  },
  '&:nth-of-type(4)': {
    'p span': {
      backgroundColor: blue[800],
    },
  },
  '&:nth-of-type(5)': {
    'p span': {
      backgroundColor: red[600],
    },
  },
});

const StatusInfo = (props: StatusHiddenProps) => {
  const {requestHdn, waitingHdn, analyzingHdn, completeHdn, errorHdn} = props;
  return (
    <Box>
      <StatusNameWrap component={'ul'}>
        <StatusNameList component={'li'} sx={{display: requestHdn ? 'none' : 'block'}}>
          <Typography variant={'body2'}>
            <Box component={'span'} />
            Request
          </Typography>
        </StatusNameList>
        <StatusNameList component={'li'} sx={{display: waitingHdn ? 'none' : 'block'}}>
          <Typography variant={'body2'}>
            <Box component={'span'} />
            Waiting
          </Typography>
        </StatusNameList>
        <StatusNameList component={'li'} sx={{display: analyzingHdn ? 'none' : 'block'}}>
          <Typography variant={'body2'}>
            <Box component={'span'} />
            Analyzing
          </Typography>
        </StatusNameList>
        <StatusNameList component={'li'} sx={{display: completeHdn ? 'none' : 'block'}}>
          <Typography variant={'body2'}>
            <Box component={'span'} />
            Complete
          </Typography>
        </StatusNameList>
        <StatusNameList component={'li'} sx={{display: errorHdn ? 'none' : 'block'}}>
          <Typography variant={'body2'}>
            <Box component={'span'} />
            Error
          </Typography>
        </StatusNameList>
      </StatusNameWrap>
    </Box>
  );
};

export default StatusInfo;
