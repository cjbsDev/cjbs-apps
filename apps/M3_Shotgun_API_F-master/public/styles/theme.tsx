import {createTheme, PaletteColorOptions} from '@mui/material/styles';
import {default as dfstyle} from '@components/variables/tokens.json';

export const primaryTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#383838',
      paper: '#121212',
    },
    // primary: {
    //   //main: dfstyle.primary,
    //   dark: "rgb(163, 23, 27)",
    //   light: "rgb(238, 78, 82)",
    //   contrastText: "#fff",
    // },
    // secondary: {
    //   //main: colors.secondary,
    // },
    // myColor: {
    //   main: "#a22",
    //   contrastText: "#fff",
    // },
    grey: {
      50: '#fafafa',
    },
  },
  typography: {
    // cjone: {
    //   fontFamily: "cjone",
    // },
    // cjoneBold: {
    //   fontFamily: "cjone",
    //   fontWeight: "bold",
    // },
    // Disable h3 variant
    h3: undefined,
  },
});

// declare module "@mui/material/styles" {
//   interface Palette {
//     myColor: PaletteColorOptions;
//   }
//   interface PaletteOptions {
//     myColor: any;
//   }
//   interface TypographyVariants {
//     cjone: React.CSSProperties;
//     cjoneBold: React.CSSProperties;
//   }
//   // allow configuration using `createTheme`
//   interface TypographyVariantsOptions {
//     cjone?: React.CSSProperties;
//     cjoneBold?: React.CSSProperties;
//   }
// }
//
// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     myColor: true;
//   }
// }
//
// declare module "@mui/material/Chip" {
//   interface ChipPropsColorOverrides {
//     myColor: true;
//   }
// }
