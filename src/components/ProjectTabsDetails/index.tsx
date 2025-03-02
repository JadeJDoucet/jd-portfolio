import { Anchor, Button, Group, Tabs, Text } from '@mantine/core';
import classes from '../../pages/Projects/Projects.module.css';

export enum EProjects {
  PREEM = 'preem',
  ALFI = 'alfi',
  SCANNAR = 'scannar',
}

const PROJECT_DESCRIPTIONS = {
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
    value: EProjects.PREEM,
    duration: 'Aug 2022 - Sep 2023',
    viewLink: 'https://apps.apple.com/us/app/preem/id6443659970',
    description: PROJECT_DESCRIPTIONS[EProjects.PREEM],
    viewLinkText: 'App Store',
  },
  {
    value: EProjects.ALFI,
    duration: 'Feb 2021 - Aug 2022',
    viewLink: 'https://www.linkedin.com/company/getalfi/',
    description: PROJECT_DESCRIPTIONS[EProjects.ALFI],
    viewLinkText: 'LinkedIn',
  },
  {
    value: EProjects.SCANNAR,
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
        <Group mb={20} justify="space-between">
          <Text className={classes.date}>{project.duration}</Text>
          <Button component="a" href={project.viewLink} target="_blank" className={classes.viewLink}>View on {project.viewLinkText}</Button>
        </Group>
        {project.description}
      </Tabs.Panel>
    ))}
  </>
)
