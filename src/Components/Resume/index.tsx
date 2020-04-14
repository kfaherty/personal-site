import * as React from 'react';

import logo from '../../Resources/images/logo.jpg';

import {
  BulletElement,
  CellHeader,
  Grid,
  HeaderGrid,
  Headline,
  Link,
  List,
  ListBullet,
  ListElement,
  Logo,
  PositionedCell,
  ResumeWrap,
  Section,
  Subhead
} from './presentational';

const WorkExperience: React.FC = () => (
  <Grid>
    <div>
      <CellHeader>Software Engineering Lead</CellHeader>
      <div>Amount - <Link href='amount.com'>amount.com</Link></div>
      <div>Chicago, IL</div>
      <div>October 2019 - Present</div>
      <ListBullet>
        <BulletElement>Lead developer on CRM and partner-facing applications</BulletElement>
        <BulletElement>Introduced API integrations with S3, Okta, Jira, and Ruby on Rails</BulletElement>
        <BulletElement>Developed front-end of point of sale and in-branch loan products using AWS Lambda and Serverless</BulletElement>
        <BulletElement>Created multi-tenant module framework for scaling Partner Portal</BulletElement>
        <BulletElement>Executed Amount brand redesign of partner-facing applications</BulletElement>
        <BulletElement>Performed extensive code review and mentoring of junior developers</BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Software Engineer</CellHeader>
      <div>Avant/Amount - <Link href='avant.com'>avant.com</Link></div>
      <div>Chicago, IL</div>
      <div>February 2018 - October 2019</div>
      <ListBullet>
        <BulletElement>
          Front-end engineer responsible for crucial contributions to Avant/
          Amount’s customer and partner facing front-end applications built with Typescript, React, Redux, Node.JS, and GraphQL.
        </BulletElement>
        <BulletElement>Overhauled styling pipeline to a themable component library with React Styled-Components</BulletElement>
        <BulletElement>Modernized CRM product to use Apollo GraphQL and Jest</BulletElement>
        <BulletElement>Developed customer dashboard for self-servicing of loan and credit card</BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Lead Javascript Developer</CellHeader>
      <div>Riskbone - <Link href='leveltradingfield.com'>leveltradingfield.com</Link></div>
      <div>Chicago, IL</div>
      <div>March 2016 - October 2017</div>
      <ListBullet>
        <BulletElement>
          Front-end lead responsible for creating an online trading platform with Backbone, Socket.io, SCSS, jQuery UI, ZeroMQ, and Node.JS
        </BulletElement>
        <BulletElement>Managed four team members to meet development deadlines</BulletElement>
        <BulletElement>
          Built key application frameworks for authentication, payment processing, caching, pub-sub, and messaging</BulletElement>
        <BulletElement>Created desktop UI with workspaces</BulletElement>
        <BulletElement>Integrated with C++ API to render real-time market data, insert orders, and calculate PnL efficiently</BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Web Developer / Designer</CellHeader>
      <div>Freelance</div>
      <div>Milwaukee, WI</div>
      <div>October 2015 - April 2016</div>
      <ListBullet>
        <BulletElement>
          Freelanced on web projects requiring web/mobile design, responsive CSS layouts, seamless page transitions, templating, e-
          commerce, asynchronous loading, prototyping, SEO, content management systems, and more
        </BulletElement>
        <BulletElement>
          Commissioned as a designer to create illustrations, advertisements, brochures, posters, brand identities, icons, logos, and more
        </BulletElement>
        <BulletElement>Participated in the local community of freelance professionals</BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Graphic Designer</CellHeader>
      <div>Radyne Corporation</div>
      <div>Milwaukee, WI</div>
      <div>February 2014 - October 2015</div>
      <ListBullet>
        <BulletElement>Independently designed marketing content in-house for print and web</BulletElement>
        <BulletElement>
          Responsible for developing websites, product icons, animations, UI wireframes, product manuals/
          guides, brochures and catalogs, advertisements, video and photography content, email templates, and exhibition designs.
        </BulletElement>
        <BulletElement>Modernized the parent company’s branding guidelines</BulletElement>
        <BulletElement>Created a distinct graphic identity for Radyne within brand standards</BulletElement>
      </ListBullet>
    </div>
  </Grid>
);

const Skills: React.FC = () => (
  <Grid>
    <List>
      <ListElement>Typescript / ESNext / React</ListElement>
      <ListElement>WebSockets / GraphQL / REST</ListElement>
      <ListElement>Node.JS / Express / PostgreSQL</ListElement>
    </List>
    <List>
      <ListElement>PostCSS / SCSS / HTML5 / WCAG</ListElement>
      <ListElement>Webpack / AWS / Jenkins / Grunt</ListElement>
      <ListElement>Visual Regression / Snapshot Testing</ListElement>
    </List>
    <List>
      <ListElement>Angular / Backbone / jQuery</ListElement>
      <ListElement>Photoshop / Illustrator / InDesign</ListElement>
      <ListElement>AfterEffects / Maya / Unity</ListElement>
    </List>
  </Grid>
);

const Resume: React.FC = () => (
  <ResumeWrap>
    <Logo
      src={logo}
      alt='logo'
    />
    <HeaderGrid>
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

    <Section>Work Experience</Section>
    <WorkExperience />

    <Section>Skills</Section>
    <Skills />

    <Section>Education</Section>
    <Grid>
      <PositionedCell span={2}>
        <CellHeader>Milwaukee Institute of Art and Design</CellHeader>
        <div>Bachelor of Fine Arts - Emphasis in Illustration</div>
        <div>Milwaukee, WI</div>
        <div>Graduated December 2013</div>
      </PositionedCell>
    </Grid>

    <Section>References</Section>
    <Grid>
      <p>Available on request</p>
    </Grid>
  </ResumeWrap>
);

export default Resume;
