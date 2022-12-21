import {grey} from '@mui/material/colors';

export const hubDataTableGridStyles = {
  rows: {
    style: {
      backgroundColor: 'white',
      cursor: 'pointer',
      minHeight: '72px', // override the row height
    },
  },
  header: {
    style: {},
  },
  head: {
    style: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
    },
  },
  headRow: {
    style: {
      backgroundColor: grey[800],
      minHeight: '40px',
    },
  },
  cells: {
    style: {
      fontSize: 14,
    },
  },
  pagination: {
    style: {
      backgroundColor: grey[100],
    },
  },
};
