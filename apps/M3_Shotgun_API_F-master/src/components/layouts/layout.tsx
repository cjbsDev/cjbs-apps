// import Header from '@components/layouts/Header';
// import SideBar from '@components/layouts/Sidebar';
// import Footer from '@components/layouts/Footer';
import {Box, Grid, Container} from '@mui/material';
import {styled} from '@mui/material/styles';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import {ReactElement, MouseEvent, useEffect, useState} from 'react';
import {cookieAtom} from '@src/recoil/atoms/cookieAtom';
import {useRecoilValue, useSetRecoilState} from 'recoil';

// const drawerWidth = 240;
//
// const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
//   open?: boolean;
// }>(({theme, open}) => ({
//   flexGrow: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   // minHeight: '100vh',
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   // marginLeft: `-${drawerWidth}px`,
//   // ...(open && {
//   //   transition: theme.transitions.create('margin', {
//   //     easing: theme.transitions.easing.easeOut,
//   //     duration: theme.transitions.duration.enteringScreen,
//   //   }),
//   //   marginLeft: 0,
//   // }),
// }));

const Layout = ({children}: any) => {
  // const [open, setOpen] = useState(false);
  // const setIsCheckCookies = useSetRecoilState(cookieAtom);
  // const valueIsCheckCookies = useRecoilValue(cookieAtom);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  //
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  // const DrawerHeader = styled('div')(({theme}) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));

  return <Box sx={{height: '100%', minHeight: '100%'}}>{children}</Box>;
};

export default Layout;
