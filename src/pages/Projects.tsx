import React from 'react';
import { Anchor, Container, Image, Paper, Tabs, Text } from '@mantine/core';
import classes from './Projects.module.css';

import PreemLogo from '../components/svgs/preem.svg';

enum EProjects {
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

const Projects: React.FC = () => {
  return (
    <Container className={classes.container}>
      <Paper className={classes.contentWrapper} shadow="xl" radius="md">
        <Tabs
          defaultValue={EProjects.PREEM}
          styles={{
            tabLabel: {
              fontSize: 20,
              fontWeight: 600,
            },
          }}
          variant="outline"
        >
          <Tabs.List>
            <Tabs.Tab
              value={EProjects.PREEM}
              leftSection={<Image src={PreemLogo} alt="preem-company-logo" />}
            />
            <Tabs.Tab
              value={EProjects.ALFI}
              leftSection={
                <Image
                  src="/images/alfi.png"
                  alt="alfi-company-logo"
                  width="100%"
                  height={27}
                />
              }
            />
            <Tabs.Tab
              value={EProjects.SCANNAR}
              leftSection={
                <Image
                  src="/images/scannar.png"
                  alt="alfi-company-logo"
                  width="100%"
                  height={40}
                />
              }
            >
              ScannAR
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={EProjects.PREEM}>
            <Text className={classes.date}>Duration: Aug 2022 - Sep 2023</Text>
            {PROJECT_DESCRIPTIONS[EProjects.PREEM]}
          </Tabs.Panel>

          <Tabs.Panel value={EProjects.ALFI}>
            <Text className={classes.date}>Duration: Aug 2022 - Feb 2021</Text>
            <Text>{PROJECT_DESCRIPTIONS[EProjects.ALFI]}</Text>
          </Tabs.Panel>

          <Tabs.Panel value={EProjects.SCANNAR}>
            {/*https://github.com/Assert-Reconceptualization*/}
            <Text className={classes.date}>Duration: Dec 2019</Text>
            <Text>{PROJECT_DESCRIPTIONS[EProjects.SCANNAR]}</Text>
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Container>
  );
};

export default Projects;
