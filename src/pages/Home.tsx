import React from 'react';
import { Container, Grid, Text, Button, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ENavigationOptions } from '../types';
import classes from './Home.module.css';

const Home: React.FC = () => {
  return (
    <Container>
      <Grid gutter="md">
        <Grid.Col span="auto" className={classes.leftColumn}>
          <Title order={1} className={classes.greeting}>
            Welcome, Adventurer
          </Title>
          <Button
            className={classes.button}
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
            className={classes.button}
            component={Link}
            radius="xl"
            size="lg"
            to={ENavigationOptions.CONTACT}
            variant="filled"
          >
            Contact Me
          </Button>
        </Grid.Col>
        <Grid.Col span="auto">
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: 20,
              borderRadius: 10,
              textAlign: 'center',
            }}
          >
            <img
              src="/images/astronaut.png"
              alt="portrait"
              style={{
                width: '100%',
                borderRadius: '50%',
                boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.5)',
              }}
            />
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
              Frontend / Mobile / Full-Stack Developer
            </Text>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;
