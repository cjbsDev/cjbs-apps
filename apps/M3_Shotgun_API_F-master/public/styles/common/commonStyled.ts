import {makeStyles} from '@mui/styles';
import {red, green, grey} from '@mui/material/colors';

export const commonStyled = makeStyles({
  absCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
