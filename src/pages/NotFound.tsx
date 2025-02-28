import React from 'react';
import { Container, Text, Button } from '@mantine/core';
import { ENavigationOptions, EPage } from '../types';

interface NotFoundProps {
  navigateTo: (page: EPage, path: string) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ navigateTo }) => {
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
        onClick={() => navigateTo(EPage.HOME, ENavigationOptions.HOME)}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
