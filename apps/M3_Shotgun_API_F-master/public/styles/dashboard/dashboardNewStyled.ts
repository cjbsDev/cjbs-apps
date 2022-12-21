import {makeStyles} from '@mui/styles';
import {red, green, lightBlue, grey, blue} from '@mui/material/colors';

export const dashboardNewStyled = makeStyles({
  wrapSearch: {
    // backgroundColor: grey[200],
    // backgroundImage: 'url(./img/backgroundDashboard.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '350px',
    marginBottom: 140,
  },
  wrapDashboardBox: {
    borderWidth: 1,
    borderColor: grey[400],
    borderStyle: 'solid',
    position: 'relative',
    // minHeight: 192,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  boxTitle: {
    fontSize: 20,
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: grey[400],
    paddingBottom: 8,
    marginBottom: 8,
  },
  cntDL2: {
    '& dt': {
      fontWeight: '900',
      fontSize: 18,
    },
    '& dd': {
      fontSize: 45,
      margin: 0,
      marginBottom: 15,
      padding: 0,
      fontWeight: 'bolder',
      display: 'flex',
    },
  },
  noticeUl: {
    listStylePosition: 'inside',
    margin: 0,
    padding: 0,
    color: 'white',
    '& li': {
      paddingTop: 2,
      paddingBottom: 3,
      paddingLeft: 10,
      // borderBottom: 1,
      // borderBottomStyle: 'solid',
      // borderBottomColor: grey[50],
      '& a': {
        color: 'white',
        '&:hover': {
          color: 'gold',
          textDecoration: 'none',
        },
      },
    },
  },


  cntDL: {
    margin: 0,
    '& dt ': {
      textAlign: 'center',
      marginBottom: 10,
      '& h3': {
        fontSize: 18,
      },
    },
    '& dd': {
      textAlign: 'center',
      fontSize: 30,
      margin: 0,
      padding: 0,
      fontWeight: 'bold',
    },
  },
  wrapCntBox: {
    color: 'white',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: 'white',
    height: 191,
    position: 'relative',
  },
  scaleBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: grey[600],
    backgroundPositionX: -1,
    height: '100%',
    transition: 'all 0.3s linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  dsItemsDL: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    fontSize: 18,
    '& dt': {
      width: '65%',
      marginBottom: 8,
    },
    '& dd': {
      margin: 0,
      padding: 0,
      marginBottom: 8,
    },
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    backgroundColor: red[300],
  },
});
