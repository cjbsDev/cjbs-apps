import React from 'react';
import Link from 'next/link';
import {LinkBtn, MenuBtn} from '@styles/styledComp';
import {styled} from '@mui/material/styles';

interface LinkProps {
  linkName: string;
  href: string;
  type?: string;
  onClick?: () => void;
  target?: string;
}

const Div = styled('div')(({theme}) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));

export const Lnk = (props) => {
  const {linkName, href, type}: LinkProps = props;

  return (
    <Link href={href}>
      {type === 'mn' ? (
        <MenuBtn underline='hover'>{linkName}</MenuBtn>
      ) : (
        <LinkBtn underline='hover'>{linkName}</LinkBtn>
      )}
    </Link>
  );
};

export const ALnk = (props) => {
  const {linkName, href, onClick, target}: LinkProps = props;

  return (
    <Link href={href}>
      <a onClick={onClick ? onClick : null} target={target ? target : null}>{linkName}</a>
    </Link>
  );
};
