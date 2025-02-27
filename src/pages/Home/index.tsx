import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Text, Button, Title } from '@mantine/core';
import { ENavigationOptions } from '../../types';
import RocketPointer from '../../components/RocketPointer';
import styles from './Home.module.css';

const Home: React.FC = () => {
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
            component={Link}
            mb={20}
            radius="xl"
            size="lg"
            to={ENavigationOptions.PROJECTS}
            variant="filled"
          >
            Explore My Work
          </Button>
          <Button
            className={styles.button}
            component={Link}
            radius="xl"
            size="lg"
            to={ENavigationOptions.CONTACT}
            variant="filled"
          >
            Contact Me
          </Button>
        </Grid.Col>
        <Grid.Col span="auto" maw="100%">
          <div className={styles.rightColumnContent}>
            <div className={styles.portraitWrapper}>
              <div className={styles.avatar}>
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
                marginTop: 10,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Hi, I'm Jade Doucet
            </Text>
            <Text
              size="sm"
              style={{
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
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
