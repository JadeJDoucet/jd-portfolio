import React from 'react';
import {
  Container,
  Image,
  Paper,
  Tabs,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import PreemLogo from '../../components/svgs/preem.svg';
import { ProjectTabsDetails, EProjects } from '../../components/ProjectTabsDetails';

import styles from './Projects.module.css';
import globalStyles from '../../Global.module.css';


const Projects: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 464px)');

  return (
    <Container className={styles.container}>
      <Text className={globalStyles.heading} mb={30}>My Projects</Text>
      <Paper className={styles.contentWrapper} shadow="xl" radius="md">
        <Tabs
          defaultValue={EProjects.PREEM}
          className={styles.tabs}
          variant="outline"
          orientation={isMobile ? 'horizontal' : 'vertical'}
        >
          <Tabs.List>
            <Tabs.Tab
              className={styles.tab}
              value={EProjects.PREEM}
              leftSection={<Image src={PreemLogo} alt="preem-company-logo" />}
            />
            <Tabs.Tab
              className={styles.tab}
              value={EProjects.ALFI}
              leftSection={
                <Image src="/images/alfi.png" alt="alfi-company-logo" />
              }
            />
            <Tabs.Tab
              className={styles.tab}
              value={EProjects.SCANNAR}
              leftSection={
                !isMobile && <Image src="/images/scannar.png" alt="scannar-logo" />
              }
            >
              ScannAR
            </Tabs.Tab>
          </Tabs.List>
          <ProjectTabsDetails />
        </Tabs>
      </Paper>
    </Container>
  );
};

export default Projects;
