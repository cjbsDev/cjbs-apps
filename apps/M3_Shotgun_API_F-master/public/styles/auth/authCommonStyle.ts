import {makeStyles} from '@mui/styles';
import {red, green, grey} from '@mui/material/colors';

export const subTextColor = grey[700];
export const alertColor = red[500];
export const successColor = green[500];

export const authCommonStyle = makeStyles({
  backgroundCJ: {
    backgroundImage: "url('/img/backgroundBlue.png'), url('/img/backgroundRed.png'), url('/img/backgroundYellow.png')",
    backgroundPosition: 'top left, top right, bottom left 160px',
    backgroundSize: '160px, 820px, 620px',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  authFormWidth: {
    marginTop: 3,
    width: 450,
  },
});
