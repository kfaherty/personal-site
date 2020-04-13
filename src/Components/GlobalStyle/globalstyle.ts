import {
  css,
} from 'styled-components';

import { Theme } from './theme';

const ATTEN_NEW_FONT: string = `'atten-new', Helvetica, Arial, 'Lucida Grande', sans-serif`;

export type VALID_FONTS =
  | 'atten-new';

export const FONT_MAP: { [font in VALID_FONTS]: string } = {
  'atten-new': ATTEN_NEW_FONT,
};

export const globalStyleCommon = css<Theme>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }

  h1 {
    font-size: 6.4rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  /* _globals.scss */
  body {
    font-family: ${({ theme: { typography } }) => FONT_MAP[typography.bodyTypeface]};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: ${({ theme: { text } }) => text.colorText};
    -webkit-font-smoothing: antialiased;
  }

  body.modal__show {
    overflow: hidden;
  }

  a {
    transition: color 100ms ease-out;
    color: ${({ theme: { link } }) => link.colorLink};
    text-decoration: ${({ theme }) => theme.globalAnchorDecoration};
    cursor: pointer;
  }

  a:hover {
    color: ${({ theme: { link } }) => link.colorLinkHover};
  }

  a:active {
    outline: none;
  }

  ${({ theme }) => theme.outline && `
    a:focus, button:focus {
      outline: ${theme.outline};
    }`
  }

  p {
    margin-bottom: 1em;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  small {
    margin-bottom: 1em;
    display: block;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  button {
    padding: 0;
    background: transparent;
    border: none;
  }

  input,
  select {
    /* remove default background */
    appearance: none;
    box-shadow: none;
    transition: background-color 0.15s ease-out;
  }

  input[type='checkbox'] {
    appearance: checkbox;
  }
  input[type='radio'] {
    appearance: radio;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
`;
