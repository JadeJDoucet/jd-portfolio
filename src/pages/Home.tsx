import React from 'react';
import { Container, Grid, Paper, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ background: 'linear-gradient(45deg, #1e5799, #2989d8)' }}>
      <Container size="sm">
        <Grid gutter="md">
          <Grid.Col span="auto">
            <Paper
              shadow="xs"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
              <Text size="xl" style={{ marginBottom: 20 }}>
                Welcome to my Portfolio
              </Text>
              <Text size="lg" style={{ marginBottom: 30 }}>
                I'm a passionate developer who loves to build amazing projects.
              </Text>
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                radius="xl"
                style={{ fontWeight: 700, width: '100%', marginBottom: 20 }}
                to="/projects"
                component={Link}
              >
                Explore My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="cyan"
                radius="xl"
                style={{ fontWeight: 700, width: '100%' }}
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
    </div>
  );
};

export default Home;
