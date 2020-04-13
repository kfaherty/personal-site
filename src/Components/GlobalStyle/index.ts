import { createGlobalStyle } from 'styled-components';

import { globalStyleCommon } from './globalstyle';
import { normalize } from './normalize';

export const GlobalStyleWrap = createGlobalStyle`
  ${normalize}

  ${globalStyleCommon}
`;
