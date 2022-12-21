import React, {useState} from 'react';
import Dn from '@public/svg/icon/download.svg';
import {Box, IconButton, Typography} from '@mui/material';
import {grey} from '@mui/material/colors';
import {styled} from '@mui/material/styles';
import axios from 'axios';
import Link from 'next/link';
import {FileDownload} from '@mui/icons-material';

interface RawProps {

}

const WrapperBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const NgsRunFileDownloadBtn = styled(IconButton)({
  border: `1px solid ${grey[400]}`,
  borderRadius: 0,
  padding: 0,
  paddingLeft: 8,
  paddingRight: 8,
  '&.Mui-disabled': {
    border: `1px solid ${grey[300]}`,
  },
});

const NgsRunTypeName = styled(Typography)({
  marginTop: 5,
  marginLeft: 5,
  lineHeight: 1,
});

const DnSVGIcon = React.forwardRef(({}, disabled) => {
  return (
    <Dn width={16} height={16} fill={disabled ? 'grey' : 'black'} />
  );
});

const RawDownloadBtn = (props) => {
  // const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const {number, rawFileUuid, sampleCode, fileUuid, accessToken, ngsRunType, isDisabled, labelName} = props;
  const downloadLink = `${process.env.NEXT_PUBLIC_API_URL}/file/downloadAsLink?downloadFileName=${sampleCode}&fileUuid=${rawFileUuid}`;

  return (
    <WrapperBox>
      {/*<NgsRunFileDownloadBtn>*/}

      {/*<IconButton sx={{ml: 1}} color={'secondary'}>*/}
      {/*  <Link*/}
      {/*    href={`${process.env.NEXT_PUBLIC_API_URL}/hub/input/downloadAsLink?inputName=${hubInputName}&fileUuid=${fileUuid}`}*/}
      {/*    passHref*/}
      {/*  >*/}
      {/*    <FileDownload />*/}
      {/*  </Link>*/}
      {/*</IconButton>*/}
      <IconButton sx={{ml: 1}} color={'secondary'}>
        <Link
          href={`${process.env.NEXT_PUBLIC_API_URL}/file/downloadAsLink?downloadFileName=${sampleCode}&fileUuid=${rawFileUuid}`}
          passHref
        >
          <FileDownload />
        </Link>
      </IconButton>
      <Typography variant={'body1'}>{labelName}</Typography>
      {/*</NgsRunFileDownloadBtn>*/}
      {/*<NgsRunTypeName variant={'body1'} color={isDisabled ? 'gray' : 'black'}>Undfnd</NgsRunTypeName>*/}
    </WrapperBox>
  );
};

export default RawDownloadBtn;
