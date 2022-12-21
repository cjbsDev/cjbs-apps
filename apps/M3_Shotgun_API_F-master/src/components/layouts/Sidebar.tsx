import {Toolbar, Divider, List, ListItem, ListItemText, ListItemIcon, ListItemButton} from '@mui/material';
import {AccessAlarm, ThreeDRotation, Inbox, Mail} from '@mui/icons-material';
import MuiDrawer from '@mui/material/Drawer';
import {useRouter} from 'next/router';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useRecoilState} from 'recoil';
import {drawerState} from '@src/recoil/atoms/drawerAtom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const SideBar = () => {
  const router = useRouter();
  const theme = useTheme();
  const [drawerIs, setDrawerIs] = useRecoilState(drawerState);

  const handleDrawerClose = () => {
    setDrawerIs(false);
  };

  return (
    <Drawer
      // sx={{
      //   width: drawerWidth,
      //   flexShrink: 0,
      //   '& .MuiDrawer-paper': {
      //     width: drawerWidth,
      //     boxSizing: 'border-box',
      //   },
      // }}
      variant="permanent"
      open={drawerIs}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItemButton onClick={() => router.push('/')}>
          <ListItemIcon sx={{fontSize: 20}}>🔥</ListItemIcon>
          <ListItemText
            sx={{my: 0}}
            primary="Dashboard"
            primaryTypographyProps={{
              // fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => router.push('/')}>
          <ListItemIcon sx={{fontSize: 20}}>🔥</ListItemIcon>
          <ListItemText
            sx={{my: 0}}
            primary="사용자 관리"
            primaryTypographyProps={{
              // fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => router.push('/')}>
          <ListItemIcon sx={{fontSize: 20}}>🔥</ListItemIcon>
          <ListItemText
            sx={{my: 0}}
            primary="배변기록 관리"
            primaryTypographyProps={{
              // fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => router.push('/')}>
          <ListItemIcon sx={{fontSize: 20}}>🔥</ListItemIcon>
          <ListItemText
            sx={{my: 0}}
            primary="연구프로그램 관리"
            primaryTypographyProps={{
              // fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => router.push('/')}>
          <ListItemIcon sx={{fontSize: 20}}>🔥</ListItemIcon>
          <ListItemText
            sx={{my: 0}}
            primary="알림"
            primaryTypographyProps={{
              // fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => router.push('/')}>
          <ListItemIcon sx={{fontSize: 20}}>🔥</ListItemIcon>
          <ListItemText
            sx={{my: 0}}
            primary="관리자"
            primaryTypographyProps={{
              // fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        <ListItemButton onClick={() => router.push('/')}>
          <ListItemIcon sx={{fontSize: 20}}>🔥</ListItemIcon>
          <ListItemText
            sx={{my: 0}}
            primary="시스템"
            primaryTypographyProps={{
              // fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        {['posts', 'userList2', 'imageFileUpload', 'userList'].map((text, index) => (
          <ListItem button key={text} onClick={() => router.push(`/${text}`)}>
            <ListItemIcon>{index % 2 === 0 ? <AccessAlarm /> : <ThreeDRotation />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/*<List>*/}
      {/*  {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
      {/*    <ListItem button key={text}>*/}
      {/*      <ListItemIcon>*/}
      {/*        {index % 2 === 0 ? <Inbox /> : <Mail />}*/}
      {/*      </ListItemIcon>*/}
      {/*      <ListItemText primary={text} />*/}
      {/*    </ListItem>*/}
      {/*  ))}*/}
      {/*</List>*/}
    </Drawer>
  );
};
export default SideBar;
