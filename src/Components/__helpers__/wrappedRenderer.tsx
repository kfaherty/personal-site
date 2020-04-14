
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { theme } from '../GlobalStyle/theme';

export const wrappedRenderer: (
  nextElement: React.ReactElement,
  options?: { location?: string }
) => renderer.ReactTestRenderer = (nextElement, options) => renderer.create(
  (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[(options && options.location) || '/']}>
        {nextElement}
      </MemoryRouter>
    </ThemeProvider>
  )
);
