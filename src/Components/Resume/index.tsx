import * as React from 'react';
import styled from 'styled-components';

const ResumeWrap = styled.div`
  margin: 3em;
`;

const Grid = styled.div`
  display: grid;
  gap: 1em 1em;
  grid-template-columns: 10em 25% 25% 25%;
`;

const Header = styled.div`

`;

const Headline = styled.h1`

`;

const Subhead = styled.h2`

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

const Resume: React.FC = () => (
  <ResumeWrap>
    <Grid>
      <div>
        logo
      </div>
      <Header>
        <Headline>Kevin Faherty</Headline>
        <Subhead>Full-stack Javascript Engineer</Subhead>
      </Header>
      <div>
        <p>hello@kevinfaherty.com</p>
        <p>https://github.com/kfaherty</p>
        <p>Chicago, IL</p>
      </div>
    </Grid>
    <Grid>
      <Section>Work Experience</Section>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
    </Grid>
    <Grid>
      <Section>Skills</Section>
      <div>
        <span>Typescript / ESNext / React</span>
        <span>WebSockets / GraphQL / REST</span>
        <span>Node.JS / Express / PostgreSQL</span>
      </div>
      <div>
        <span>PostCSS / SCSS / HTML5 / WCAG</span>
        <span>Webpack / AWS / Jenkins / Grunt</span>
        <span>Visual Regression / Snapshot Testing</span>
      </div>
      <div>
        <span>Angular / Backbone / jQuery</span>
        <span>Photoshop / Illustrator / InDesign</span>
        <span>AfterEffects / Maya / Unity</span>
      </div>
    </Grid>
    <Grid>
      <Section>Education</Section>
      <p>Hello world</p>
    </Grid>
    <Grid>
      <Section>References</Section>
      <p>Available on request</p>
    </Grid>
  </ResumeWrap>
);

export default Resume;
