import * as React from 'react';

import logo from '../../Resources/images/logo.jpg';

import {
  BulletElement,
  CellHeader,
  Grid,
  HeaderGrid,
  Headline,
  Link,
  ListBullet,
  ListElement,
  Logo,
  PositionedCell,
  ResumeWrap,
  Section,
  SkillGrid,
  Subhead,
} from './presentational';

const WorkExperience: React.FC = () => (
  <Grid>
    <div>
      <CellHeader>Software Engineering Lead</CellHeader>
      <div>Amount - <Link href='https://amount.com'>amount.com</Link></div>
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
      <div>Avant/Amount - <Link href='https://avant.com'>avant.com</Link></div>
      <div>Chicago, IL</div>
      <div>February 2018 - October 2019</div>
      <ListBullet>
        <BulletElement>
          Front-end engineer responsible for crucial contributions to Avant/Amount’s
          customer and partner facing front-end applications built with Typescript, React, Redux, Node.JS, and GraphQL.
        </BulletElement>
        <BulletElement>Overhauled styling pipeline to a themable component library with React Styled-Components</BulletElement>
        <BulletElement>Modernized CRM product to use Apollo GraphQL and Jest</BulletElement>
        <BulletElement>Developed customer dashboard for self-servicing of loan and credit card</BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Lead Javascript Developer</CellHeader>
      <div>Riskbone - <Link href='https://leveltradingfield.com'>leveltradingfield.com</Link></div>
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
          Responsible for developing websites, product icons, animations, UI wireframes, product manuals/guides,
          brochures and catalogs, advertisements, video and photography content, email templates, and exhibition designs
        </BulletElement>
        <BulletElement>Modernized the parent company’s branding guidelines</BulletElement>
        <BulletElement>Created a distinct graphic identity for Radyne within brand standards</BulletElement>
      </ListBullet>
    </div>
  </Grid>
);

const Skills: React.FC = () => (
  <SkillGrid as='ul'>
      <ListElement>Typescript / ESNext / React</ListElement>
      <ListElement>WebSockets / GraphQL / REST</ListElement>
      <ListElement>Node.JS / Express / PostgreSQL</ListElement>
      <ListElement>PostCSS / SCSS / HTML5 / WCAG</ListElement>
      <ListElement>Webpack / AWS / Jenkins / Grunt</ListElement>
      <ListElement>Visual Regression / Snapshot Testing</ListElement>
      <ListElement>Angular / Backbone / jQuery</ListElement>
      <ListElement>Photoshop / Illustrator / InDesign</ListElement>
      <ListElement>AfterEffects / Maya / Unity</ListElement>
  </SkillGrid>
);

const Projects: React.FC = () => (
  <Grid>
    <div>
      <CellHeader>ArtHawk</CellHeader>
      <div>Artist Showcase Platform
        {/*- <Link href='https://art-hawk.com'>Website</Link> */}
      </div>
      <div>2020</div>
      <ListBullet>
        <BulletElement>An art showcase platform with built-in tools for freelance artists</BulletElement>
        <BulletElement>
          Features a global gallery for discovering new artists, comment threads, favorites, and a commission workflow for hiring
          freelance artists
        </BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Squawk Chat</CellHeader>
      <div>Chat Client - <Link href='https://github.com/kfaherty/squawk-chat'>Github</Link></div>
      <div>2018</div>
      <ListBullet>
        <BulletElement>A chat client written in React that integrates with a third-party websocket API</BulletElement>
        <BulletElement>
          Features realtime chat messaging in private and public rooms, direct messages, animations, and more
        </BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Supervisitor</CellHeader>
      <div>Jam Game - <Link href='https://mattdonatelli.itch.io/supervisitor'>Website</Link></div>
      <div>2017</div>
      <ListBullet>
        <BulletElement>
          Supervisitor is a game made in 48 hours
          for the <Link href='https://itch.io/jam/bscotch100'>Butterscotch ShenaniJam</Link> made
          in Unity using C# with Matt Donatelli and Zach Fendelman
        </BulletElement>
        <BulletElement>Contributed environment art, level design, lighting, and modeling</BulletElement>
        <BulletElement>Ranked #6 overall by user ratings out of 130 entries</BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>TweetBox</CellHeader>
      <div>Twitter Client - <Link href='https://github.com/kfaherty/tweets-react'>Github</Link></div>
      <div>2017</div>
      <ListBullet>
        <BulletElement>
          Twitter app that features oAuth authentication with Twitter,
          realtime streaming timelines, favorites, retweets, mentions, direct messages, profiles, search, and more
        </BulletElement>
        <BulletElement>Built using React, socket.io, and a Node backend</BulletElement>
      </ListBullet>
    </div>
    <div>
      <CellHeader>Our Forgotten Alphabet</CellHeader>
      <div>Arcade Game - <Link href='https://github.com/kfaherty/ourforgottenalphabet'>Github</Link></div>
      <div>2015</div>
      <ListBullet>
        <BulletElement>A game about a comet drawing constellations, made in the Love2d framework using Lua</BulletElement>
        <BulletElement>Based on an unreleased game by Steph Thirion</BulletElement>
      </ListBullet>
    </div>
  </Grid>
);

const Header: React.FC = () => (
  <>
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
  </>
);

const Bio: React.FC = () => (
  <>
    <div />
    <HeaderGrid>
      <p>
        Hey there! I'm Kevin Faherty, a web-developer &amp; artist.
        I like using technology to make the world a better place. I live &amp; work in Chicago.
      </p>
    </HeaderGrid>
  </>
);

const Resume: React.FC = () => (
  <ResumeWrap>
    <Header />

    <Bio />

    <Section>Work Experience</Section>
    <WorkExperience />

    <Section>Projects</Section>
    <Projects />

    <Section>Skills</Section>
    <Skills />
  </ResumeWrap>
);

export default Resume;
