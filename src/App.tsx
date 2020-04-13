import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './Components/GlobalStyle/theme';
import { GlobalStyleWrap } from './Components/GlobalStyle';

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyleWrap {...theme} />
  </ThemeProvider>
);
