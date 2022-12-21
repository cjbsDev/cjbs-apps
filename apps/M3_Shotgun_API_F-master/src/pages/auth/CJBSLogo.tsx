import React from 'react';
import Image from 'next/image';
import ezbiocloudLogo from '@public/img/logo/ezbiocloudLogoBeta.png';
import {Box} from '@mui/material';

interface LogoProps {
  width?: number;
  height?: number;
}

const CJBSLogo = ({width, height}: LogoProps) => {
  return (
    <Box sx={{mb: 2}}>
      <Image
        src={ezbiocloudLogo}
        alt='EzBioCloud'
        quality={100}
        priority
        placeholder='blur'
        width={width}
        height={height}
      />
    </Box>
  );
};

export default CJBSLogo;
