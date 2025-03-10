import { Anchor, Button, Group, Tabs, Text } from '@mantine/core';
import classes from '../../pages/Projects/Projects.module.css';

export enum EProjects {
  MDCALC = 'mdcalc',
  PREEM = 'preem',
  ALFI = 'alfi',
  SCANNAR = 'scannar',
}

const PROJECT_DESCRIPTIONS = {
  [EProjects.MDCALC]: (
    <>
      <Text className={classes.description}>
        Since October 2023, I've played a large role in developing dynamic Next.js pages on the         <Anchor
          href="https://apps.apple.com/us/app/mdcalc-medical-calculator/id1001640662"
          target="_blank"
          rel="noreferrer"
        >
          MDCalc
        </Anchor> website that leverage both Server-Side Rendering (SSR) and Client-Side Rendering (CSR) to enhance user experience for over 100,000 users. This also relied on my ability to craft accessible and intuitive user interfaces, while enhancing user experience through animations and interactive elements using CSS and SVGs.
      </Text>
      <Text className={classes.description}>
        Additionally, I engineered reusable context architectures across React and React Native (for the <Anchor
          href="https://apps.apple.com/us/app/mdcalc-medical-calculator/id1001640662"
          target="_blank"
          rel="noreferrer"
        >
          MDCalc
        </Anchor>
        &nbsp;mobile app), which significantly improves the maintainability and extensibility of user authentication flows and various modal interactions.
        My role also involved integrating Strapi CMS to efficiently feed data into our Go and Node.js servers, while implementing strategic caching to boost performance.
      </Text>
    </>
  ),
  [EProjects.PREEM]: (
    <Text className={classes.description}>
      As one of three frontend / mobile engineers at this start-up, I played a
      significant role in architecting and constructing the&nbsp;
      <Anchor
        href="https://apps.apple.com/us/app/preem/id6443659970"
        target="_blank"
        rel="noreferrer"
      >
        Preem
      </Anchor>
      &nbsp;mobile app - as well as modifying, updating, and maintaining
      the&nbsp;
      <Anchor href="https://gopreem.com" target="_blank" rel="noreferrer">
        GoPreem
      </Anchor>
      &nbsp;website. After starting on the Preem App in November 2022, we
      deployed an MVP to both the iOS App Store and Google Play Store by the end
      of the month.
    </Text>
  ),
  [EProjects.ALFI]: (
    <Text className={classes.description}>
      AI and Machine Learning were the most interesting facets of ALFI.
      Interfacing with APIs via React Native, React, and Kotlin enabled us to
      use Edge Computing to push the capabilities of React Native to deliver
      targeted ads to the correct audiences - all from the back of a rideshare.
      Accompanying the Android application, I played a large role in various
      iterations on the web platform where advertisers would create marketing
      campaigns with their choice of ad targeting.
    </Text>
  ),
  [EProjects.SCANNAR]: (
    <Text className={classes.description}>
      A few engineers and a dream is what it took to create&nbsp;
      <Anchor
        href="https://github.com/Assert-Reconceptualization"
        target="_blank"
      >
        ScannAR
      </Anchor>
      . "Playing Around" with Augmented Reality was the initial idea, this
      sprouted the idea of ScannAR. Image recognition, real-world information
      anchoring, and more was my role here. Utilizing the Viro React library, I
      created the core of the application where image recognition and AR were
      implemented in a camera view with a UI as well as various UIs within the
      app
    </Text>
  ),
};

const PROJECTS = [
  {
    value: EProjects.MDCALC,
    title: `${EProjects.MDCALC}`,
    subtitle: 'Previous Role',
    role: 'Senior Front End Engineer / Full Stack Engineer',
    duration: 'Oct 2023 - Mar 2025',
    viewLink: 'https://mdcalc.com',
    description: PROJECT_DESCRIPTIONS[EProjects.MDCALC],
    viewLinkText: 'Web',
  },
  {
    value: EProjects.PREEM,
    title: `${EProjects.PREEM}`,
    subtitle: 'Previous Role',
    role: 'Senior Front End Engineer',
    duration: 'Aug 2022 - Sep 2023',
    viewLink: 'https://apps.apple.com/us/app/preem/id6443659970',
    description: PROJECT_DESCRIPTIONS[EProjects.PREEM],
    viewLinkText: 'App Store',
  },
  {
    value: EProjects.ALFI,
    title: `${EProjects.ALFI}`,
    subtitle: 'Previous Role',
    role: 'Senior Front End Engineer',
    duration: 'Feb 2021 - Aug 2022',
    viewLink: 'https://www.linkedin.com/company/getalfi/',
    description: PROJECT_DESCRIPTIONS[EProjects.ALFI],
    viewLinkText: 'LinkedIn',
  },
  {
    value: EProjects.SCANNAR,
    title: `${EProjects.SCANNAR}`,
    subtitle: 'Side Project',
    role: 'Software Engineer / Mobile Engineer',
    duration: 'Dec 2019 - Jan 2020',
    viewLink: 'https://github.com/Assert-Reconceptualization',
    description: PROJECT_DESCRIPTIONS[EProjects.SCANNAR],
    viewLinkText: 'GitHub',
  },
];

export const ProjectTabsDetails = () =>
(
  <>
    {PROJECTS.map((project) => (
      <Tabs.Panel key={project.value} value={project.value} className={classes.panel}>
        <Group>
          <Text className={classes.title}>{project.title}</Text>
          <Text className={classes.subtitle}>({project.subtitle})</Text>
        </Group>
        <Text className={classes.role}>{project.role}</Text>
        <Group className={classes.durationGroup}>
          <Text className={classes.date}>{project.duration}</Text>
          <Button component="a" href={project.viewLink} target="_blank" className={classes.viewLink}>View on {project.viewLinkText}</Button>
        </Group>
        {project.description}
      </Tabs.Panel>
    ))}
  </>
)
