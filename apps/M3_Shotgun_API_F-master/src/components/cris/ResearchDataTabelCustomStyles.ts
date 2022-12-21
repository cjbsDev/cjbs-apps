import {styled} from '@mui/material/styles';
import {themeJeju} from '@src/components/variables/themeJeju';
import {default as dfstyle} from '@components/variables/tokens.json';

const themeSet = dfstyle.global;
const themeColor = themeJeju.palette;
const themeFont = themeJeju.typography;

export const customStyles = {
  rows: {
    style: {
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10,
      height:100,
      fontWeight: 500
      //fontSize: themeFont.body1,
    },
  },
  headCells: {
    style: {
      fontWeight: `${
        themeSet.fontWeights[themeSet.Components['Table Header'].value.fontWeight.replace('$fontWeights.', '')].value
      }`,
      fontFamily: `${
        themeSet.fontFamilies[themeSet.Components['Table Header'].value.fontFamily.replace('$fontFamilies.', '')].value
      }`,
      fontSize: `${themeSet.fontSize[themeSet.Components['Table Header'].value.fontSize.replace(/\D/g, '')].value}px`,
      backgroundColor: themeColor.grey[800],
      height:'40px',
      color: 'white'
    },
  },
  cells: {
    style: {
      // paddingLeft: '8px', // override the cell padding for data cells
      // paddingRight: '8px',
    },
  },
};

/***************/
// table //
/***************/
export const tableStyle = {
  background: '#555',






};
