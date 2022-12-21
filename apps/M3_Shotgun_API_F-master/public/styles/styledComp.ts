import {styled} from '@mui/material/styles';
import {Box, Typography, Link, Grid, Button} from '@mui/material';
import {themeJeju} from '@src/components/variables/themeJeju';
import {blue} from '@mui/material/colors';

const themeColor = themeJeju.palette;
const themeFont = themeJeju.typography;

/***************/
// Position //
/***************/
export const ABox = styled(Box)`
  position: absolute;
  width: 100%;
`;

export const AtBox = styled(Box)`
  position: absolute;
  top: 0;
`;

export const AltBox = styled(Box)`
  position: absolute;
  left: 0;
  top: 0;
`;

export const ArtBox = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
`;

export const AbBox = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const AccBox = styled(Button)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

/***************/
// Typography //
/***************/
export const H1 = styled(Typography)`
  font-size: ${themeFont.h1.fontSize};
  font-family: ${themeFont.h1.fontFamily};
  font-weight: ${themeFont.h1.fontWeight};
  line-height: ${themeFont.h1.lineHeight};
  letter-spacing: ${themeFont.h1.letterSpacing};
`;

export const H2 = styled(Typography)`
  font-size: ${themeFont.h2.fontSize};
  font-family: ${themeFont.h2.fontFamily};
  font-weight: ${themeFont.h2.fontWeight};
  line-height: ${themeFont.h2.lineHeight};
  letter-spacing: ${themeFont.h2.letterSpacing};
`;

export const H3 = styled(Typography)`
  font-size: ${themeFont.h3.fontSize};
  font-family: ${themeFont.h3.fontFamily};
  font-weight: ${themeFont.h3.fontWeight};
  line-height: ${themeFont.h3.lineHeight};
  letter-spacing: ${themeFont.h3.letterSpacing};
`;

export const H4 = styled(Typography)`
  font-size: ${themeFont.h4.fontSize};
  font-family: ${themeFont.h4.fontFamily};
  font-weight: ${themeFont.h4.fontWeight};
  line-height: ${themeFont.h4.lineHeight};
  letter-spacing: ${themeFont.h4.letterSpacing};
`;

export const H5 = styled(Typography)`
  font-size: ${themeFont.h5.fontSize};
  font-family: ${themeFont.h5.fontFamily};
  font-weight: ${themeFont.h5.fontWeight};
  line-height: ${themeFont.h5.lineHeight};
  letter-spacing: ${themeFont.h5.letterSpacing};
`;

export const H6 = styled(Typography)`
  font-size: ${themeFont.h6.fontSize};
  font-family: ${themeFont.h6.fontFamily};
  font-weight: ${themeFont.h6.fontWeight};
  line-height: ${themeFont.h6.lineHeight};
  letter-spacing: ${themeFont.h6.letterSpacing};
`;

/***************/
// Grid //
/***************/
export const Row = styled(Grid)``;

/***************/
// Link //
/***************/
export const LinkBtn = styled(Link)`
  font-size: ${themeFont.button.fontSize};
  font-family: ${themeFont.button.fontFamily};
  font-weight: ${themeFont.button.fontWeight};
  line-height: ${themeFont.button.lineHeight};
  letter-spacing: ${themeFont.button.letterSpacing};
  cursor: pointer;
`;

export const MenuBtn = styled(Link)`
  font-size: ${themeFont.button.fontSize};
  font-family: ${themeFont.button.fontFamily};
  font-weight: ${themeFont.button.fontWeight};
  line-height: ${themeFont.button.lineHeight};
  letter-spacing: ${themeFont.button.letterSpacing};
  color: white;
  cursor: pointer;
`;
