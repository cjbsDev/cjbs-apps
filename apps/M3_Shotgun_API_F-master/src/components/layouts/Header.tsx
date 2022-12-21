import React, {useState, MouseEvent, ReactElement, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {
  Box,
  Badge,
  IconButton,
  Typography,
  Toolbar,
  Button,
  MenuItem,
  Menu,
  ListItemIcon,
  Divider,
  Grid,
} from '@mui/material';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import {removeCookies, checkCookies} from 'cookies-next';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import {Logout, PersonAdd, Settings} from '@mui/icons-material';
import {GetServerSideProps} from 'next';
import {cookieAtom} from '@src/recoil/atoms/cookieAtom';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {drawerState} from '@src/recoil/atoms/drawerAtom';
import Image from 'next/image';

import cjbsLogoImg from '/public/img/logo/logo-en.png';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const setIsCheckCookies = useSetRecoilState(cookieAtom);
  const valueIsCheckCookies = useRecoilValue(cookieAtom);
  const [drawerIs, setDrawerIs] = useRecoilState(drawerState);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleDrawerOpen = () => {
    setDrawerIs(true);
  };

  const handleDrawerClose = () => {
    setDrawerIs(false);
  };

  const handleSignout = async () => {
    setAnchorEl(null);
    await removeCookies('emHYMSSW');
    await removeCookies('emIT');
    await setIsCheckCookies(checkCookies('emHYMSSW'));
    await router.push('/auth/signin');
  };

  const goToSignin = () => {
    router.push('/');
  };

  const goToProfile = () => {
    router.push('/profile');
  };

  const goToUserList2 = () => {
    router.push('/userList2');
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const openMenu = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
    >
      <MenuItem onClick={goToProfile}>
        <Avatar /> Profile
      </MenuItem>
      {/*<MenuItem>*/}
      {/*  <Avatar /> My account*/}
      {/*</MenuItem>*/}
      <Divider />
      {/*<MenuItem>*/}
      {/*  <ListItemIcon>*/}
      {/*    <PersonAdd fontSize="small" />*/}
      {/*  </ListItemIcon>*/}
      {/*  Add another account*/}
      {/*</MenuItem>*/}
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleSignout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        open={drawerIs}
        sx={
          {
            // width: `calc(100% - ${drawerWidth}px)`,
            // ml: `${drawerWidth}px`,
          }
        }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(drawerIs && {display: 'none'}),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{background: ''}}>
            <Box sx={{display: 'flex'}}>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Link href="/main">
                  <Image
                    src={cjbsLogoImg}
                    width={120}
                    height={32}
                    alt="CJ바이오사이언스"
                    quality={90}
                    priority
                    placeholder="blur"
                  />
                </Link>
              </Box>
              <ul>
                <li>
                  <Link href="/userList">사용자 목록</Link>
                </li>
              </ul>
            </Box>
          </Box>

          <Box sx={{flexGrow: 1}} />

          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            {/*<IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={goToUserList2}>*/}
            {/*  <Badge badgeContent={4} color="error">*/}
            {/*    <MailIcon/>*/}
            {/*  </Badge>*/}
            {/*</IconButton>*/}
            {/*<IconButton*/}
            {/*  size="large"*/}
            {/*  aria-label="show 17 new notifications"*/}
            {/*  color="inherit"*/}
            {/*>*/}
            {/*  <Badge badgeContent={17} color="error">*/}
            {/*    <NotificationsIcon/>*/}
            {/*  </Badge>*/}
            {/*</IconButton>*/}

            {valueIsCheckCookies ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <IconButton size="large" color="inherit" aria-label="Sign in" onClick={goToSignin}>
                <LoginIcon />
              </IconButton>
            )}
          </Box>
          <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>
    </Box>
  );
};

export default Header;
