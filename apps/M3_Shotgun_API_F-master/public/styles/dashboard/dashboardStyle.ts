import {makeStyles} from '@mui/styles';
import {red, green, lightBlue, grey, blue} from '@mui/material/colors';

export const dashboardStyles = makeStyles({
  wrapSearch: {
    backgroundColor: '#0E185F',
    backgroundImage: 'url(./img/backgroundDashboard.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '244px',
    // marginBottom: 50,
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
  cntDl: {
    '& dt': {},
    '& dd': {
      fontSize: 30,
      margin: 0,
      marginBottom: 1,
      padding: 0,
      fontWeight: 'bold',
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
});
