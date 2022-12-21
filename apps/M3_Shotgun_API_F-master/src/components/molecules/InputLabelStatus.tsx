import React from 'react';
import {Chip, CircularProgress} from '@mui/material';
import {amber, blue, cyan, green, red} from '@mui/material/colors';
import {styled} from '@mui/material/styles';
import Dn from '@public/svg/icon/download.svg';
import Er from '@public/svg/icon/error_circle.svg';
import Rqst from '@public/svg/icon/Request.svg';
import Wt from '@public/svg/icon/Waiting.svg';
import {Done} from '@mui/icons-material';

interface InputLabelStatusProps {
  engnRnSts: string;
  engnPrstNm: string;
  onClick?: React.EventHandler<any>;
}

const Status = styled(Chip)({
  borderWidth: 1,
  // fontWeight: '400',
  // fontFamily: `${'Noto Sans'}`,
  // fontSize: 14,
});

const RequestStatus = styled(Status)({
  borderColor: amber[500],
  color: amber[800],
});

const WaitingStatus = styled(Status)({
  borderColor: cyan[500],
  color: cyan[800],
});

const AnalyzingStatus = styled(Status)({
  borderColor: green[500],
  color: green[800],
});

const CompleteStatus = styled(Status)({
  borderColor: blue[500],
  color: blue[800],
});

const ErrorStatus = styled(Status)({
  borderColor: red[500],
  color: red[600],
});

const InputLabelStatus = ({engnRnSts, engnPrstNm, onClick}: InputLabelStatusProps) => {
  if (engnRnSts !== undefined) {
    switch (engnRnSts) {
      case 'INITIAL':
        return (
          <RequestStatus
            icon={<Rqst width={18} height={18} fill={amber[800]} />}
            color={'warning'}
            label={engnPrstNm}
            variant={'outlined'}
            size='small'
            onClick={onClick}
          />
        );
      case 'QUEUED':
        return (
          <WaitingStatus
            icon={<Wt width={18} height={18} fill={cyan[800]} />}
            color={'secondary'}
            label={engnPrstNm}
            variant={'outlined'}
            size='small'
            onClick={onClick}
          />
        );
      case 'RUNNING':
        return (
          <AnalyzingStatus
            icon={<CircularProgress disableShrink size={14} />}
            color={'success'}
            label={engnPrstNm}
            variant={'outlined'}
            size='small'
            onClick={onClick}
          />
        );
      case 'DONE':
        return (
          <CompleteStatus
            // icon={<Dn width={18} height={18} fill={blue[800]} />}
            icon={<Done />}
            color={'primary'}
            label={engnPrstNm}
            variant={'outlined'}
            size='small'
            onClick={onClick}
          />
        );
      case 'ERROR':
        return (
          <ErrorStatus
            icon={<Er width={18} height={18} fill={red[800]} />}
            color={'error'}
            label={engnPrstNm}
            variant={'outlined'}
            size='small'
            onClick={onClick}
          />
        );
    }
  } else {
    return <p>undefined</p>;
  }
};

export default InputLabelStatus;
