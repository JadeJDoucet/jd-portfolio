import React, { useState } from 'react';
import { Anchor, Center, Container, Image, Tabs, Text } from '@mantine/core';
import { SegmentedControl } from '@mantine/core';
import classes from './Projects.module.css';

import PreemLogo from '../components/svgs/preem.svg';

enum EProjects {
  PREEM = 'preem',
  ALFI = 'alfi',
  SCANNAR = 'scannar',
}

const PROJECT_DESCRIPTIONS = {
  [EProjects.PREEM]:
    'As one of three frontend/mobile engineers at this start-up, I was a major contributor in architecting and constructing the ' +
    (
      <Anchor
        href="https://apps.apple.com/us/app/preem/id6443659970"
        target="_blank"
        rel="noreferrer"
      >
        Preem
      </Anchor>
    ) +
    'mobile app; as well as modifying, updating, and maintaining the ' +
    (
      <Anchor href="https://gopreem.com" target="_blank" rel="noreferrer">
        GoPreem
      </Anchor>
    ) +
    ' website. After starting on the Preem App in November 2022, we deployed an MVP to both the iOS App Store and Google Play Store by the end of the month.',
  [EProjects.ALFI]:
    "AI and Machine Learning was the most interesting facet of ALFI. Interfacing with API's via React Native, React, and Kotlin enabled us to use Edge Computing to push the capabilities of React Native to deliver targeted ads to the correct audiences -- all from the back of a ride share. Re-architecting the Web Portal where advertisers created marketing campaigns as well as architecting a new mobile application is where I played a large role in ALFI",
  [EProjects.SCANNAR]:
    'A few engineers and a dream is what it took to create ScannAR. "Playing Around" with Augmented Reality was the initial idea, this sprouted the idea of ScannAR. Image recognition, real-world information anchoring, and more was my role here. Utilizing the Viro React library, I created the core of the application where image recognition and AR were implemented in a camera view with a UI as well as various UIs within the app',
};

/*
  TODO: Tabs for each one
                          Preem | ALFI | ScannAr
                          Sep 2022 - Aug 2023
                           lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                           lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lo
                           rem ipsum lorem ipsum lorem ipsum lorem ipsum
                          

*/

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<EProjects>(
    EProjects.PREEM
  );
  return (
    <Container className={classes.container}>
      {/* <SegmentedControl
        orientation="vertical"
        fullWidth
        size="md"
        data={[
          {
            label: 'Preem Inc - Social Cycling Platform',
            value: EProjects.PREEM,
          },
          { label: 'ALFI - AI/ML Ad Serving', value: EProjects.ALFI },
          {
            label: 'ScannAR - Augmented Reality Tagging System',
            value: EProjects.SCANNAR,
          },
        ]}
        value={selectedProject}
        onChange={(value) => setSelectedProject(value as EProjects)}
      /> */}
      <Tabs defaultValue={EProjects.PREEM}>
        <Tabs.List>
          <Tabs.Tab
            value={EProjects.PREEM}
            leftSection={<Image src={PreemLogo} alt="preem-company-logo" />}
          />
          <Tabs.Tab
            value={EProjects.ALFI}
            // leftSection={<IconMessageCircle style={iconStyle} />}
          >
            ALFI
          </Tabs.Tab>
          <Tabs.Tab
            value={EProjects.SCANNAR}
            // leftSection={<IconSettings style={iconStyle} />}
          >
            ScannAR
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={EProjects.PREEM}>
          Aug 2022 -{'>'} Sep 2023
          <Text>{PROJECT_DESCRIPTIONS[selectedProject]}</Text>
        </Tabs.Panel>

        <Tabs.Panel value={EProjects.ALFI}>
          Aug 2022 -{'>'} Feb 2021
          <Text>{PROJECT_DESCRIPTIONS[selectedProject]}</Text>
        </Tabs.Panel>

        <Tabs.Panel value={EProjects.SCANNAR}>
          Dec 2019
          <Text>{PROJECT_DESCRIPTIONS[selectedProject]}</Text>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Projects;
