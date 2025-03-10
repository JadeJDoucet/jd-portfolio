import React, { useRef, TouchEvent } from 'react';
import clsx from 'clsx';
import {
  Container,
  Image,
  Paper,
  Tabs,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { ProjectTabsDetails, EProjects } from '../../components/ProjectTabsDetails';
import PreemLogo from '../../components/svgs/preem.svg';
import MDCalcLogo from '../../components/svgs/mdcalc.svg';
import ScienceLogicLogo from '../../components/svgs/sciencelogic.svg';

import styles from './Projects.module.css';
import globalStyles from '../../Global.module.css';

const Projects: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 464px)');
  const touchStartXRef = useRef<number>(0);
  const [activeTab, setActiveTab] = React.useState<string>(EProjects.MDCALC);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartXRef.current;

    if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance threshold
      const projectOptions = Object.values(EProjects);
      const currentIndex = projectOptions.indexOf(activeTab as EProjects);

      if (swipeDistance > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        setActiveTab(projectOptions[currentIndex - 1]);
      } else if (swipeDistance < 0 && currentIndex < projectOptions.length - 1) {
        // Swipe left - go to next
        setActiveTab(projectOptions[currentIndex + 1]);
      }
    }
  };

  return (
    <Container className={clsx(styles.container, globalStyles.pageContainer)}>
      <Title className={globalStyles.heading} order={1}>A Few Things I've done</Title>

      <Paper
        className={styles.contentWrapper}
        shadow="xl"
        radius="md"
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
        ref={contentRef}
      >
        <Tabs
          value={activeTab}
          onChange={(value) => setActiveTab(value || EProjects.PREEM)}
          className={styles.tabs}
          variant="outline"
          orientation={isMobile ? 'horizontal' : 'vertical'}
        >
          <Tabs.List>
            <Tabs.Tab
              className={styles.tab}
              value={EProjects.MDCALC}
              leftSection={<Image src={MDCalcLogo} alt="mdcalc-company-logo" className={styles.mdcalcLogo} />}
            />
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
              value={EProjects.SCIENCELOGIC}
              leftSection={<Image src={ScienceLogicLogo} alt="sciencelogic-company-logo" />}

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
