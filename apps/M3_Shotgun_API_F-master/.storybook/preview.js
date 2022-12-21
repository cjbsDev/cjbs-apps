import {ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import {themeJeju} from '@components/variables/themeJeju';
import {RecoilRoot} from 'recoil';
export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={themeJeju}>
      <ThemeProvider theme={themeJeju}><RecoilRoot>{Story()}</RecoilRoot></ThemeProvider>
    </MUIThemeProvider>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
