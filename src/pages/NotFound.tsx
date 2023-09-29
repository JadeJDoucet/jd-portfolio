import React from 'react';
import { Container, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ENavigationOptions } from '../types';

const NotFound: React.FC = () => {
  return (
    <Container
      size="lg"
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <Text
        size="xl"
        style={{ color: 'white', marginBottom: 20, fontWeight: 700 }}
      >
        Oops! We've searched the galaxy, but this page could not be found
      </Text>
      <Button
        size="xl"
        variant="gradient"
        radius="xl"
        to={ENavigationOptions.HOME}
        component={Link}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
