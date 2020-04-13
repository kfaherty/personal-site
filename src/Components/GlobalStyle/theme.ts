import baseStyled, { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    lightShade: '#eeeee8' /* Cararra */,
    lightAccent: '#949b92' /* Stack */,
    mainBrand: '#876351' /* Shadow */,
    darkShade: '#252423' /* Shark */,
    darkAccent: '#ac7742' /* Cape Palliser */,
    primary: '#876351' /* Shadow */,
    info: '#232525' /* Shark */,
    success: '#5e9850' /* Fruit Salad */,
    warning: '#db8818' /* Zest */,
    danger: '#f44336' /* Pomegranate */,
  },
  typography: {
    bodyTypeface: 'atten-new'
  },
  text: {
    colorText: '#232525'
  },
  link: {
    colorLink: '#5e9850',
    colorLinkHover: '#db8818',
  },
  globalAnchorDecoration: 'underline',
  outline: 'none' // whatever
} as const;

export type Theme = typeof theme;
export const styled = baseStyled;
