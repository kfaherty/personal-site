import baseStyled, { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  typography: {
    bodyTypeface: 'atten-new'
  },
  text: {
    colorText: '#232525',
  },
  section: {
    colorBackground: '#232525',
    colorText: '#fff'
  },
  link: {
    colorLink: '#232525',
    colorLinkHover: '#232525'
  },
  globalAnchorDecoration: 'underline',
  outline: '4px dotted #232525'
} as const;

export type Theme = typeof theme;
export const styled = baseStyled;
