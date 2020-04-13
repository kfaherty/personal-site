// import original module declarations
import 'styled-components'
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      lightShade: string,
      lightAccent: string,
      mainBrand: string,
      darkShade: string,
      darkAccent: string,
      primary: string,
      info: string,
      success: string,
      warning: string,
      danger: string
  },
    typography: {
      bodyTypeface: string;
    },
    text: {
      colorText: string;
    }
    link: {
      colorLink: string;
      colorLinkHover: string;
    }
    globalAnchorDecoration: string;
    outline: string;
  }
}
