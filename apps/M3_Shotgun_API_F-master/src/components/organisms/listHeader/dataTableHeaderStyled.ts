import {styled} from '@mui/material/styles';
import {Box, Grid} from '@mui/material';
import {amber, blue, cyan, green, red} from '@mui/material/colors';

export const GridContainer = styled(Grid)({
  marginBottom: 13,
  alignItems: 'center',
  // display: 'flex',
  // justifyContent: 'space-between',
});

export const DataTitleBox = styled(Box)({});

export const StatusNameWrap = styled(Box)({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  justifyContent: 'flex-end',
  '& li': {
    marginLeft: 15,
  },
});

export const StatusNameList = styled(Box)({
  'p span': {
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  '&:nth-of-type(1)': {
    'p span': {
      backgroundColor: amber[800],
    },
  },
  '&:nth-of-type(2)': {
    'p span': {
      backgroundColor: cyan[600],
    },
  },
  '&:nth-of-type(3)': {
    'p span': {
      backgroundColor: green[600],
    },
  },
  '&:nth-of-type(4)': {
    'p span': {
      backgroundColor: blue[800],
    },
  },
  '&:nth-of-type(5)': {
    'p span': {
      backgroundColor: red[600],
    },
  },
});
