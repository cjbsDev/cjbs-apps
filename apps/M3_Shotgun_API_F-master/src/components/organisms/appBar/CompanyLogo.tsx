import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Typography, Button} from '@mui/material';
import logoEnWhite from '@public/img/logo/logo-en-white.png';

const CompanyLogo = () => {
  return (
    <Typography component='h1' noWrap sx={{cursor: 'pointer', mr: 5, display: {xs: 'flex', md: 'flex'}}}>
      <Link href='/'>
        <Image priority src={logoEnWhite} alt='CJBioScience' width={110} height={34} />
      </Link>
    </Typography>
  );
};

export default CompanyLogo;
