import React, { PropsWithChildren } from 'react';
import { Container, Text } from '@mantine/core';

import NavItem from '../NavItem';
import Starfield from '../Starfield';
import ShootingStars from '../ShootingStars';
import { ENavigationOptions, EPage } from '../../types';

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

      <header className={styles.header}>
        <nav>
          {currentPage !== EPage.HOME && (
            <ul className={styles.navMenu}>
              <>
                <NavItem
                  onClick={() => navigateTo(EPage.HOME, ENavigationOptions.HOME)}
                  isActive={false}
                >
                  Home
                </NavItem>
                <NavItem
                  onClick={() => navigateTo(EPage.PROJECTS, ENavigationOptions.PROJECTS)}
                  isActive={currentPage === EPage.PROJECTS}
                >
                  Projects
                </NavItem>
                <NavItem
                  onClick={() => navigateTo(EPage.CONTACT, ENavigationOptions.CONTACT)}
                  isActive={currentPage === EPage.CONTACT}
                >
                  Contact
                </NavItem>
              </>
            </ul>
          )}
        </nav>
      </header>
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
