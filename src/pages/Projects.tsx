import React from 'react';
import { Container, Grid, Paper, Text, Button } from '@mantine/core';

const Projects: React.FC = () => {
  return (
    <div style={{ background: 'linear-gradient(45deg, #1e5799, #2989d8)' }}>
      <Container size="sm">
        <Grid gutter="md">
          <Grid.Col span="auto">
            <Paper
              shadow="xs"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
              <Text>Preem - Social Network for Cyclists</Text>
              <Text>[link to appstore here]</Text>
              Screenshots here
            </Paper>
          </Grid.Col>
          <Grid.Col span="auto"></Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col span="auto">
            <Paper
              shadow="xs"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
              <Text>ALFI - AI/ML powered ad-targeting</Text>
              <Text>[Link to ALFI page?]</Text>
              Screenshots
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
