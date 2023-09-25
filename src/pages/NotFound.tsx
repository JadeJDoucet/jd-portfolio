import React from 'react';
import { Container, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ENavigationOptions } from '../types';

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(45deg, #1e5799, #2989d8)',
        minHeight: '100vh',
      }}
    >
      <Container
        size="lg"
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Text
          size="xl"
          style={{ color: 'white', marginBottom: 20, fontWeight: 700 }}
        >
          Oops! We've searched the galaxy, but this page could not be found
        </Text>
        <Button
          size="lg"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          radius="xl"
          style={{ fontWeight: 700 }}
          to={ENavigationOptions.HOME}
          component={Link}
        >
          Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
