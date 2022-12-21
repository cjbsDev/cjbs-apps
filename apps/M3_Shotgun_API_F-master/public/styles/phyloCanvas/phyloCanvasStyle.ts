import {makeStyles} from '@mui/styles';
import {red, green, lightBlue, grey} from '@mui/material/colors';

export const hoverBackgroundColor = grey[300];

export const usePhyloCanvasStyles = makeStyles({
  slctFileWrap: {
    cursor: 'pointer',
    borderStyle: 'dotted',
    borderWidth: 3,
    borderColor: lightBlue[300],
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
      backgroundColor: grey[200],
    },
  },
});
