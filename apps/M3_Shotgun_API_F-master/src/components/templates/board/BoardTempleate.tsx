import React from 'react';
import {Grid, Box, Button, Container} from '@mui/material';

import {styled} from '@mui/material/styles';

import { getLayout } from '@src/components/layouts/AppLayout';
import EzmxSnackBar, {EzmxSnackBarProps} from '@src/components/alert/EzmxSnackBar';
import {grey} from '@mui/material/colors';


const ContainerBox = styled(Box)`
    height: 98vh;
    width: 100%;
    display: flex;
    overflow: hidden;
  `

const SideMainBox = styled(Box)`
  overflow: hidden;
  width: 276px;
  min-width: 276px;
  background-color: white;
  border-right: 1px solid #dee2e6;
  padding: 55px 21px 0px 21px;
`

const TableBox = styled(Box)`
  background-color: ${grey[100]};
  padding: 55px 40px 0px 40px;
  width: 100%;
  overflow: scroll;
`

const SnackBar = ({type, open, message, onClose} : EzmxSnackBarProps) => {
  return (
    <EzmxSnackBar message={message} open={open} type={type} onClose={onClose} />
  )
}

const Side = ({children}) => {
  
  return (
      <SideMainBox>{children}</SideMainBox>
  )
}

const Content = ({children}) => {
  return (
      <TableBox>
          {children}
      </TableBox>
  )
}

const MainContainer = ({children}) => {
  return (
      <ContainerBox>
        {children}
      </ContainerBox>
  )
}
//
const BoardTempleate = ({side : Side, content : Content}) => {
  return (
    <BoardTempleate.Container>
      <BoardTempleate.Side>
        <Side/>
      </BoardTempleate.Side>
      <BoardTempleate.Contents>
        <Content/>
      </BoardTempleate.Contents>
    </BoardTempleate.Container>
  );
};

export default BoardTempleate;

BoardTempleate.SnackBar = SnackBar;
BoardTempleate.Container = MainContainer;
BoardTempleate.Side = Side;
BoardTempleate.Contents = Content;
BoardTempleate.getLayout = getLayout;



