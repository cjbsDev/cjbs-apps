import React, {useState, Suspense} from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {CSSObject, styled, Theme} from '@mui/material/styles';
import {Box, Button, Drawer, Typography} from '@mui/material';
import {themeJeju} from '@components/variables/themeJeju';
import {HelpOutlineOutlined, ChevronRight, AccountTree} from '@mui/icons-material';
import {GET} from '@hooks/api/useAPI';
import IcnReadMe from '@public/img/icons/icn_readme.png';
import Navigation from '@components/organisms/Navigation';

const drawerWidth = 228;
const DynamicStudyDBModal = dynamic(() => import('@components/organisms/StudyDBModal'), {ssr: false});
// const DynamicFilovistaModal = dynamic(() => import('@components/organisms/FilovistaModal'), {ssr: false});

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
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const ToggleDrawer = styled(Drawer, {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
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

const Snb = (props) => {
  const {open} = props;
  const [studyDBOpen, setStudyDBOpen] = useState<boolean>(false);
  const [filovistaOpen, setFilovistaOpen] = useState<boolean>(false);
  const [studyDBList, setStudyDBList] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const {data: jobStatusCountStatus} = useSWR('/shotgun/job/run/status', fetcher, {
  //   refreshInterval: 0,
  //   suspense: true,
  // });
  // const {data: dataSourceCountStatus} = useSWR('/shotgun/filter/data/source', fetcher, {
  //   refreshInterval: 0,
  // });

  // const router = useRouter();

  const handleClickOpen = () => {
    setStudyDBOpen(true);
    getStudyDatabase();
  };

  const handleClose = () => {
    setStudyDBOpen(false);
  };

  const handleFilovistaOpen = () => {
    // setFilovistaOpen(true);
    window.open('/filovista');
  };
  const handleFilovistaClose = () => {
    setFilovistaOpen(false);
  };

  const getStudyDatabase = () => {
    GET('/shotgun/dataset/list').then((res) => {
      console.log('dataSetId', res.data.data.dataSetList);
      setStudyDBList(res.data.data.dataSetList);
      // console.log('dataSetId', res.data.data.dataSetList.dataSetId);
      // console.log('dataSetDesc', res.data.data.dataSetList.dataSetDesc);
      // console.log('dataSetName', res.data.data.dataSetList.dataSetName);
    });
  };

  return (
    <>
      <ToggleDrawer
        open={open}
        variant='permanent'
        sx={{
          [`& .MuiDrawer-paper`]: {
            backgroundColor: themeJeju.palette.grey['800'],
          },
        }}
      >
        <Box sx={{textAlign: 'center', backgroundColor: themeJeju.palette.grey['900'], mt: 4, pt: 6.3, pb: 3}}>
          <Typography variant={'subtitle1'} component='h2' sx={{color: 'white'}}>
            SHOTGUN METAGENOMICS
          </Typography>
          {/*<Box sx={{p: 3, py: 2}}>*/}
          {/*  <Button*/}
          {/*    fullWidth*/}
          {/*    variant={'outlined'}*/}
          {/*    sx={{mb: 2, borderColor: themeJeju.palette.grey['400'], backgroundColor: 'rgba(255, 255, 255, 0.2)'}}*/}
          {/*    // onClick={() => setSnackbarOpen(true)}*/}
          {/*    onClick={handleClickOpen}*/}
          {/*  >*/}
          {/*    <Typography variant={'button'} sx={{color: 'white', justifyContent: 'center', display: 'flex'}}>*/}
          {/*      <Add fontSize={'small'} />*/}
          {/*      Data Warehouse*/}
          {/*    </Typography>*/}
          {/*  </Button>*/}
          {/*</Box>*/}
        </Box>

        <Navigation />

        <Box
          sx={{
            m: 2.5,
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Box sx={{mb: 2}}>
            <Button
              href='https://www.notion.so/Shotgun-Service-Closed-Beta-Test-1f327754380e4710ae5cb28e73347909'
              target={'_blank'}
              sx={{
                border: '1px solid #4DD0E1',
              }}
              startIcon={<Image src={IcnReadMe} width={24} height={20} alt='ReadMe' />}
              endIcon={<ChevronRight sx={{color: '#4DD0E1'}} />}
            >
              <Typography
                variant={'subtitle2'}
                component='div'
                sx={{color: '#4DD0E1', lineHeight: 1, display: 'inline', fontWeight: '600'}}
              >
                Beta Test Readme
              </Typography>
            </Button>
          </Box>
          <Box sx={{mb: 2}}>
            <Button
              onClick={handleFilovistaOpen}
              variant='text'
              startIcon={<AccountTree />}
              sx={{
                color: 'white',
                '.MuiButton-startIcon': {
                  color: 'white',
                },
              }}
            >
              <Typography variant={'subtitle1'} component='div' sx={{color: 'white'}}>
                Filovista
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button
              href='https://good-mimosa-0a8.notion.site/Help-Center-e5023a9e56374d38904164568e6ab0e5'
              variant={'text'}
              startIcon={<HelpOutlineOutlined />}
              sx={{
                color: 'white',
                '.MuiButton-startIcon': {
                  color: 'white',
                },
              }}
              target={'_blank'}
            >
              <Typography variant={'subtitle1'} component='div' sx={{color: 'white'}}>
                How to use
              </Typography>
            </Button>
          </Box>
        </Box>
      </ToggleDrawer>

      {/*<Suspense fallback={'Loading...'}>*/}
      <DynamicStudyDBModal studyDBModalOpen={studyDBOpen} onClose={handleClose} studyDBList={studyDBList} />
      {/*</Suspense>*/}
      {/*<Suspense fallback={'Loading...'}>*/}
      {/*<DynamicFilovistaModal open={filovistaOpen} onClose={handleFilovistaClose} />*/}
      {/*</Suspense>*/}
    </>
  );
};

export default Snb;
