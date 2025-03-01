import React, { useRef } from 'react';
import { Container, Grid, Text, Button, Title } from '@mantine/core';
import { ENavigationOptions, EPage } from '../../types';
import RocketPointer from '../../components/RocketPointer';
import styles from './Home.module.css';
import { useMediaQuery } from '@mantine/hooks';

interface HomeProps {
  navigateTo: (page: EPage, path: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const avatarRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <RocketPointer />
      <Grid gutter="md">
        <Grid.Col span="auto" className={styles.leftColumn}>
          <Title order={1} className={styles.greeting}>
            Welcome, Adventurer
          </Title>
          <Button
            className={styles.button}
            mb={20}
            radius="xl"
            size="lg"
            onClick={() => navigateTo(EPage.PROJECTS, ENavigationOptions.PROJECTS)}
            variant="filled"
          >
            Explore My Work
          </Button>
          <Button
            className={styles.button}
            radius="xl"
            size="lg"
            onClick={() => navigateTo(EPage.CONTACT, ENavigationOptions.CONTACT)}
            variant="filled"
          >
            Contact Me
          </Button>
        </Grid.Col>
        <Grid.Col span="auto" maw="100%">
          <div className={styles.rightColumnContent}>
            <div className={styles.portraitWrapper}>
              <div
                ref={avatarRef}
                className={styles.avatar}
              >
                <img
                  src="/images/astronaut.png"
                  alt="portrait"
                  className={styles.front}
                />
                <img
                  src="/images/portfolio-profile.png"
                  alt="portrait"
                  className={styles.back}
                />
              </div>
            </div>
            <Text
              size="lg"
              style={{
                marginTop: 20,
                color: 'white',
                textShadow: '0 0 10px rgba(150, 120, 255, 0.7)',
                fontWeight: 600,
                letterSpacing: '1px'
              }}
            >
              Hi, I'm Jade Doucet
            </Text>
            <Text
              size="sm"
              style={{
                color: 'white',
                textShadow: '0 0 8px rgba(150, 120, 255, 0.6)',
                letterSpacing: '0.5px',
                opacity: 0.9,
                marginTop: 5
              }}
            >
              Frontend / Mobile / Full-Stack Engineer
            </Text>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;
