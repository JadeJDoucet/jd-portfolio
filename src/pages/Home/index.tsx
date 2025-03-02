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
  const avatarRef = useRef<HTMLDivElement>(null);

  return (
    <Container className={styles.container}>
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
        <Grid.Col span="auto" maw="100%" className={styles.rightColumn}>
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
            className={styles.name}
          >
            Hi, I'm Jade Doucet
          </Text>
          <Text
            size="sm"
            className={styles.subtext}
          >
            Frontend / Mobile / Full-Stack Engineer
          </Text>
        </Grid.Col>
      </Grid>
    </Container >
  );
};

export default Home;
