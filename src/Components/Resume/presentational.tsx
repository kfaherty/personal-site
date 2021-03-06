import { css, default as styled } from 'styled-components';

import { media } from '../GlobalStyle/media';

interface IPositionedCell {
  position?: number;
  span?: number;
}

export const ResumeWrap = styled.div`
  margin: 5em 3em;
  display: grid;
  gap: 2.5em 1em;
  grid-template-columns: 100%;
  grid-template-rows: 8em auto;

  ${media.small`
    gap: 5em 1em;
    grid-template-columns: 10em calc(100% - 11em);
  `}
`;

export const Logo = styled.img`
  display: flex;
  height: 8em;

  ${media.small`
    justify-self: flex-end;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 1em 1em;

  ${media.small`
    grid-template-columns: 100%;
  `}
  ${media.medium`
    grid-template-columns: repeat(2, 50%);
  `}
  ${media.large`
    grid-template-columns: repeat(3, 33%);
  `}
`;

export const HeaderGrid = styled(Grid)`
  align-items: center;
`;

export const SkillGrid = styled(Grid)`
  grid-template-rows: repeat(3, 1fr);
  /* grid-auto-flow: column; */
`;

// tslint:disable: no-magic-numbers
export const PositionedCell = styled.div<IPositionedCell>`
  grid-column-start: ${({ position }) => position ? position : 'auto'};
  grid-column-end: span 1;

  ${({ span }) => span && css`
    ${media.small`
      grid-column-end: ${span > 1 ? 'span 2' : `span ${span}`};
    `}
    ${media.medium`
      grid-column-end: ${span > 2 ? 'span 3' : `span ${span}`};
    `}
    ${media.large`
      grid-column-end: ${span > 3 ? 'span 4' : `span ${span}`};
    `}
  `}
`;
// tslint:enable: no-magic-numbers

export const Headline = styled.h1`
  font-size: 4.2rem;
  line-height: 3.6rem;
  margin: 0;
`;

export const Subhead = styled.h2``;

export const Link = styled.a`
  font-style: italic;
  color: ${({ theme: { link }}) => link.colorLink};

  &:hover {
    color: ${({ theme: { link }}) => link.colorLinkHover};
  }
`;

export const Section = styled.h3`
  display: inline-flex;
  width: min-content;
  white-space: nowrap;
  padding: 0.125em 0.375em;
  background: ${({ theme: { section } }) => section.colorBackground};
  color: ${({ theme: { section } }) => section.colorText};
  align-self: baseline;
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin-top: -0.125em;

  ${media.small`
    justify-self: flex-end;
  `}
`;

export const CellHeader = styled.h4`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const ListBullet = styled.ul`
  list-style: none;
  color: ${({ theme: { text } }) => text.colorText};
  margin: 1em 1.25em;
`;

export const ListElement = styled.li`
  position: relative;
  list-style: none;
  color: ${({ theme: { text } }) => text.colorText};
`;

export const BulletElement = styled(ListElement)`
  padding-left: 0.25em;
  margin: 0 0 0.5em;

  &::before {
    content: '\\2022';
    position: absolute;
    color: ${({ theme }) => theme.text.colorText};
    left: -0.75em;
    font-size: 2.5rem;
  }
`;
