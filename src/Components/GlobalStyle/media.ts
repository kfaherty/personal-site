import * as styledComponents from 'styled-components';

type MediaQueryBuild =
  (info: { minWidth: number }) =>
    (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) =>
      styledComponents.FlattenSimpleInterpolation;

export type VALID_BREAKPOINTS =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

export const BreakPointsMap: { [key in VALID_BREAKPOINTS]: number } = {
  xsmall: 28.125,
  small: 37.51,
  medium: 51.26,
  mediumLarge: 58.125,
  large: 70.01,
  xlarge: 80.01,
  xxlarge: 90.01
};

const buildMediaQuery: MediaQueryBuild = info => (literals, ...placeholders) => styledComponents.css`
  @media (min-width: ${info.minWidth}em) {
    ${styledComponents.css(literals, ...placeholders)}
  }
`;

export const media = {
  xsmall: buildMediaQuery({ minWidth: BreakPointsMap.xsmall }),
  small: buildMediaQuery({ minWidth: BreakPointsMap.small }),
  medium: buildMediaQuery({ minWidth: BreakPointsMap.medium }),
  mediumLarge: buildMediaQuery({ minWidth: BreakPointsMap.mediumLarge }),
  large: buildMediaQuery({ minWidth: BreakPointsMap.large }),
  xlarge: buildMediaQuery({ minWidth: BreakPointsMap.xlarge }),
  xxlarge: buildMediaQuery({ minWidth: BreakPointsMap.xxlarge }),
};
