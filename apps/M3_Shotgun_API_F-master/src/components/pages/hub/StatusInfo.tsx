import React from 'react';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {amber, blue, cyan, green, red} from '@mui/material/colors';

const StatusNameList = styled(Box)({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  justifyContent: 'flex-end',
  '& li': {
    marginLeft: 15,
  },
});

const StatusCycleLabel = styled(Box)({
  display: 'inline-block',
  width: 8,
  height: 8,
  borderRadius: 50,
  marginRight: 5,
});

const RequestLabel = styled(StatusCycleLabel)({
  backgroundColor: amber[800],
});

const WaitingLabel = styled(StatusCycleLabel)({
  backgroundColor: cyan[600],
});

const AnalyzingLabel = styled(StatusCycleLabel)({
  backgroundColor: green[600],
});

const CompleteLabel = styled(StatusCycleLabel)({
  backgroundColor: blue[800],
});

const ErrorLabel = styled(StatusCycleLabel)({
  backgroundColor: red[600],
});

const StatusInfo = () => {
  return (
    <Box sx={{p: 1, mb: 3}}>
      <StatusNameList component={'ul'}>
        <li>
          <Typography variant={'body2'}>
            <RequestLabel component={'span'} />
            Request
          </Typography>
        </li>
        <li>
          <Typography variant={'body2'}>
            <WaitingLabel component={'span'} />
            Waiting
          </Typography>
        </li>
        <li>
          <Typography variant={'body2'}>
            <AnalyzingLabel component={'span'} />
            Analyzing
          </Typography>
        </li>
        <li>
          <Typography variant={'body2'}>
            <CompleteLabel component={'span'} />
            Complete
          </Typography>
        </li>
        <li>
          <Typography variant={'body2'}>
            <ErrorLabel component={'span'} />
            Error
          </Typography>
        </li>
        {/*</ul>*/}
      </StatusNameList>
    </Box>
  );
};

export default StatusInfo;
