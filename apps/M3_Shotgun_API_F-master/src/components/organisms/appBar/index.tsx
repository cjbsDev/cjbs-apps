import React, {useState, MouseEvent, Suspense} from 'react';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {hasCookie, deleteCookie} from 'cookies-next';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {cookieAtom} from '@src/recoil/atoms/cookieAtom';
import {userInfoAtom} from '@src/recoil/atoms/userAtom';
import {Box, Slide, useScrollTrigger, AppBar, Toolbar, Typography} from '@mui/material';
import CompanyLogo from '@components/organisms/appBar/CompanyLogo';
import {grey} from '@mui/material/colors';
import {appBarStyles} from '@styles/appBar/appBarStyle';

const DynamicUserInfos = dynamic(() => import('@components/organisms/appBar/UserInfos'), {suspense: true});

interface Props {
  window?: () => Window;
  children: React.ReactElement;
  userInfo: {
    email: string;
    nickname: string;
  };
}

function HideOnScroll(props: Props) {
  const {children, window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const AppBarType1 = (props) => {
  const {userInfo} = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const setIsCheckCookies = useSetRecoilState(cookieAtom);
  const getUserInfoAtom = useRecoilValue(userInfoAtom);
  const {userName, userLevel, userEmail} = getUserInfoAtom;

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    // router.push(path);
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    console.log('opopopopopop');
    setAnchorElUser(null);
    // logoutToken();
    // deleteCookie('saasHYMSSW', {path: '/', domain: '.cjbioscience.com'});
    // deleteCookie('saasIT', {path: '/', domain: '.cjbioscience.com'});

    deleteCookie('saasHYMSSW', {path: '/', domain: '.ezbiocloud.net'});
    deleteCookie('saasIT', {path: '/', domain: '.ezbiocloud.net'});
    setIsCheckCookies(hasCookie('saasHYMSSW'));
    router.push('/auth/signin');
  };

  return (
    // <HideOnScroll {...props}>
    // </HideOnScroll>
    <AppBar sx={{zIndex: 1201, backgroundColor: grey[800], boxShadow: 'none'}}>
      <Toolbar variant='dense'>
        <CompanyLogo />
        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}}}>
          {/*<Lnk linkName='Filovista' href='/phyloCanvas/treeViewIfrm' type='mn' />*/}
        </Box>

        <Box sx={{flexGrow: 0}}>
          <Suspense
            fallback={
              <Typography variant='body2' sx={{color: 'white'}}>
                UserInfo Loading...
              </Typography>
            }
          >
            <DynamicUserInfos
              email={userInfo.email}
              anchorElUser={anchorElUser}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
              handleSignOut={handleSignOut}
            />
          </Suspense>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarType1;
