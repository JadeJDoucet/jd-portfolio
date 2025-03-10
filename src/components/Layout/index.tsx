import React, { PropsWithChildren } from 'react';
import { Container, Text } from '@mantine/core';

import Starfield from '../Starfield';
import ShootingStars from '../ShootingStars';
import Header from '../Header';
import { EPage } from '../../types';

import styles from './Layout.module.css';

interface LayoutProps extends PropsWithChildren {
  currentPage: EPage;
  navigateTo: (page: EPage, path: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, navigateTo }) => {
  return (
    <Container
      fluid
      className={styles.backgroundContainer}
    >
      <Starfield />
      <ShootingStars />

      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main>{children}</main>
      <footer className={styles.footer}>
        <Text size="sm">
          © {new Date().getFullYear()} <i>JD Development & Design</i>
        </Text>
      </footer>
    </Container>
  );
};

export default Layout;
