import React from 'react';
import { Container, Grid, Paper, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ENavigationOptions } from '../types';
import classes from './Home.module.css';

const Home: React.FC = () => {
  return (
    <Container
      style={{
        background: 'linear-gradient(45deg, #1e5799, #2989d8)',
      }}
    >
      <Grid gutter="md">
        <Grid.Col span="auto">
          <Paper shadow="xs" className={classes.paper}>
            <Text size="xl" mb={20}>
              Welcome, Adventurer
            </Text>
            <Button
              fullWidth
              size="lg"
              variant="gradient"
              radius="xl"
              style={{ fontWeight: 700 }}
              mb={20}
              to={ENavigationOptions.PROJECTS}
              component={Link}
            >
              Explore My Work
            </Button>
            <Button
              fullWidth
              size="lg"
              variant="outline"
              radius="xl"
              style={{ fontWeight: 700 }}
            >
              Contact Me
            </Button>
          </Paper>
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
