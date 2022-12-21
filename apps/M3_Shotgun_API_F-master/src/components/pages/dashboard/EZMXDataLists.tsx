import React, {useState} from 'react';
import {Grid, IconButton, Snackbar, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import CountUp from 'react-countup';
import router from 'next/router';
import GotoArrow from '@public/svg/icon/mainArrow.svg';
import {dashboardNewStyled} from '@styles/dashboard/dashboardNewStyled';
import {commonStyled} from '@styles/common/commonStyled';

const EZMXDataLists = ({data}) => {
  const [open, setOpen] = useState<boolean>(false);
  const dashboardCss = dashboardNewStyled();
  const cmnCss = commonStyled();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={4}
          className={dashboardCss.wrapCntBox}
          sx={{
            overflow: 'hidden',
          }}
        >
          <Box className={dashboardCss.scaleBox} sx={{
            backgroundImage: 'url(./img/hub/hubSmallBnr.png)',
          }} />

          <Box className={cmnCss.absCenter}>
            <dl className={dashboardCss.cntDL}>
              <dt><Typography variant={'h3'} component={'h3'}>HUB</Typography></dt>
              <dd>
                <Typography variant={'body1'} sx={{fontSize: 45, mr: 0.5}} component={'span'}>
                  <CountUp
                    duration={0.3}
                    end={data.hub.numberOfUploadedInputs}
                    separator={','} />
                </Typography>
                <Typography variant={'body2'} component={'span'}>Data</Typography>
              </dd>
            </dl>
            <Box sx={{textAlign: 'center'}}>
              <IconButton
                onClick={() => router.push('/hub')}
              >
                <GotoArrow width={30} height={30} fill={'white'} />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={4}
          className={dashboardCss.wrapCntBox}
          sx={{overflow: 'hidden'}}
        >
          <Box className={dashboardCss.scaleBox} sx={{
            backgroundImage: 'url(./img/hub/researchManagementSmallBnr.png)',
          }} />

          <Box className={cmnCss.absCenter}>
            <dl className={dashboardCss.cntDL}>
              <dt><Typography variant={'h3'} component={'h3'}>연구관리</Typography></dt>
              <dd>
                <Typography variant={'body1'} sx={{fontSize: 45, mr: 0.5}} component={'span'}>
                  <CountUp duration={0.3} end={0} separator={','} />
                </Typography>
                <Typography variant={'body2'} component={'span'}>건</Typography>
              </dd>
            </dl>
            <Box sx={{textAlign: 'center'}}>
              <IconButton onClick={() => setOpen(true)}>
                <GotoArrow width={30} height={30} fill={'white'} />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={4}
          className={dashboardCss.wrapCntBox}
          sx={{overflow: 'hidden'}}
        >
          <Box className={dashboardCss.scaleBox} sx={{
            backgroundImage: 'url(./img/hub/strainBankSmallBnr.png)',
          }} />
          <Box className={cmnCss.absCenter}>
            <dl className={dashboardCss.cntDL}>
              <dt><Typography variant={'h3'} component={'h3'}>STRAIN BANK</Typography></dt>
              <dd>
                <Typography variant={'body1'} sx={{fontSize: 45, mr: 0.5}} component={'span'}>
                  <CountUp
                    duration={0.3}
                    end={data.strain.numberOfStrains}
                    separator={','} />
                </Typography>
                <Typography variant={'body2'} component={'span'}>건</Typography>
              </dd>
            </dl>
            <Box sx={{textAlign: 'center'}}>
              <IconButton
                onClick={() => router.push('/strain')}
              >
                <GotoArrow width={30} height={30} fill={'white'} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={open}
        autoHideDuration={800}
        onClose={handleClose}
        message='준비중 입니다.'
      />
    </>
  );
};

export default EZMXDataLists;
