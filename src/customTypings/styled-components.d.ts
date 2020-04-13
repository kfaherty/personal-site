// import original module declarations
import 'styled-components'
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      bodyTypeface: string;
    }
    text: {
      colorText: string;
    }
    section: {
      colorBackground: string;
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
