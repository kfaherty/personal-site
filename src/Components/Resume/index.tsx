import * as React from 'react';
import { css, default as styled } from 'styled-components';

import { media } from '../GlobalStyle/media';

interface IPositionedCell {
  position?: number;
  span?: number;
}

const ResumeWrap = styled.div`
  margin: 3em;
`;

const Grid = styled.div`
  display: grid;
  gap: 1em 1em;
  grid-template-columns: 100%;
  margin-bottom: 3em;

  ${media.small`
    grid-template-columns: 10em 25%;
  `}
  ${media.medium`
    grid-template-columns: 10em repeat(2, 25%);
  `}
  ${media.large`
    grid-template-columns: 10em repeat(3, 25%);
  `}
`;

const HeaderGrid = styled(Grid)`
  align-items: center;
  margin: 5em 0;
`;

// tslint:disable: no-magic-numbers
const PositionedCell = styled.div<IPositionedCell>`
  grid-column-start: ${({ position }) => position ? position : 'auto'};
  grid-column-end: span 1;

  ${({ span }) => span && css`
    ${media.small`
      grid-column-end: ${span > 2 ? 'span 2' : `span ${span}`};
    `}
    ${media.medium`
      grid-column-end: ${span > 3 ? 'span 3' : `span ${span}`};
    `}
    ${media.large`
      grid-column-end: ${span > 4 ? 'span 4' : `span ${span}`};
    `}
  `}
`;
// tslint:enable: no-magic-numbers

const Headline = styled.h1`
  font-size: 4.2rem;
  line-height: 3.6rem;
  margin: 0;
`;

const Subhead = styled.h2``;

const Link = styled.a`
  font-style: italic;
  color: ${({ theme: { link }}) => link.colorLink};

  &:hover {
    color: ${({ theme: { link }}) => link.colorLinkHover};
  }
`;

const Section = styled.h3`
  display: inline-flex;
  width: min-content;
  white-space: nowrap;
  padding: 0.125em 0.375em;
  background: ${({ theme: { section } }) => section.colorBackground};
  color: ${({ theme: { section } }) => section.colorText};
  align-self: baseline;
  justify-self: flex-end;
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 2.2rem;
  margin-top: -0.125em;
`;

const CellHeader = styled.h4`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

const ListBullet = styled.ul`
  margin: 1em 1.25em;
  list-style: none;
  color: ${({ theme: { text } }) => text.colorText};
`;

const BulletElement = styled.li`
  padding-left: 0.25em;
  margin: 0 0 0.5em;
  position: relative;

  &::before {
    content: '\\2022';
    position: absolute;
    color: ${({ theme }) => theme.text.colorText};
    left: -0.75em;
    font-size: 2.5rem;
  }
`;

const Resume: React.FC = () => (
  <ResumeWrap>
    <HeaderGrid>
      <div>
        logo
      </div>
      <PositionedCell span={2}>
        <Headline>Kevin Faherty</Headline>
        <Subhead>Full-stack Javascript Engineer</Subhead>
      </PositionedCell>
      <div>
        <div>hello@kevinfaherty.com</div>
        <Link href='https://github.com/kfaherty'>https://github.com/kfaherty</Link>
        <div>Chicago, IL</div>
      </div>
    </HeaderGrid>
    <Grid>
      <Section>Work Experience</Section>
      <div>
        <CellHeader>Software Engineering Lead</CellHeader>
        <div>Amount - <Link href='amount.com'>amount.com</Link></div>
        <div>Chicago, IL</div>
        <div>October 2019 - Present</div>
      </div>
      <div>
        <CellHeader>Software Engineer</CellHeader>
        <div>Avant/Amount - <Link href='avant.com'>avant.com</Link></div>
        <div>Chicago, IL</div>
        <div>February 2018 - October 2019</div>
      </div>
      <div>
        <CellHeader>Lead Javascript Developer</CellHeader>
        <div>Riskbone - <Link href='leveltradingfield.com'>leveltradingfield.com</Link></div>
        <div>Chicago, IL</div>
        <div>March 2016 - October 2017</div>
      </div>
      <PositionedCell position={2}>
        <CellHeader>Web Developer / Designer</CellHeader>
        <div>Freelance</div>
        <div>Milwaukee, WI</div>
        <div>October 2015 - April 2016</div>
      </PositionedCell>
      <div>
        <CellHeader>Graphic Designer</CellHeader>
        <div>Radyne Corporation</div>
        <div>Milwaukee, WI</div>
        <div>February 2014 - October 2015</div>
      </div>
    </Grid>
    <Grid>
      <Section>Skills</Section>
      <div>
        <div>Typescript / ESNext / React</div>
        <div>WebSockets / GraphQL / REST</div>
        <div>Node.JS / Express / PostgreSQL</div>
      </div>
      <div>
        <div>PostCSS / SCSS / HTML5 / WCAG</div>
        <div>Webpack / AWS / Jenkins / Grunt</div>
        <div>Visual Regression / Snapshot Testing</div>
      </div>
      <div>
        <div>Angular / Backbone / jQuery</div>
        <div>Photoshop / Illustrator / InDesign</div>
        <div>AfterEffects / Maya / Unity</div>
      </div>
    </Grid>
    <Grid>
      <Section>Education</Section>
      <PositionedCell span={2}>
        <CellHeader>Milwaukee Institute of Art and Design</CellHeader>
        <div>Bachelor of Fine Arts - Emphasis in Illustration</div>
        <div>Milwaukee, WI</div>
        <div>Graduated December 2013</div>
      </PositionedCell>
    </Grid>
    <Grid>
      <Section>References</Section>
      <p>Available on request</p>
    </Grid>
  </ResumeWrap>
);

export default Resume;
