import {grey} from '@mui/material/colors';
import {themeJeju} from '@components/variables/themeJeju';

export const dataTableCustomStyles = {
  header: {
    style: {
      backgroundColor: themeJeju.palette.grey['100'],
      padding: 0,
    },
  },
  head: {
    style: {
      color: 'white',
      fontWeight: '800',
      fontSize: 14,
      backgroundColor: themeJeju.palette.grey['800'],
    },
  },
  subHeader: {
    style: {
      backgroundColor: themeJeju.palette.grey['100'],
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  headRow: {
    style: {
      backgroundColor: themeJeju.palette.grey['800'],
      minHeight: '40px',
      '&:nth-of-type(1)': {
        paddingLeft: 24,
      },
      '&:nth-last-child(1)': {
        paddingRight: 24,
      },
      // paddingLeft: 24,
      // paddingRight: 24,
    },
  },
  cells: {
    style: {
      fontSize: 16,
      '&:nth-of-type(1)': {
        // paddingLeft: 40,
      },
      '&:nth-last-child(1)': {
        // paddingRight: 40,
      },
    },
  },
  rows: {
    style: {
      backgroundColor: 'white',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 24,
      paddingRight: 24,
      // minHeight: '72px',
      // '&:nth-of-type(1)': {
      //   paddingLeft: 24,
      // },
    },
  },
  pagination: {
    style: {
      backgroundColor: themeJeju.palette.grey['100'],
      color: 'black',
    },
  },
};
