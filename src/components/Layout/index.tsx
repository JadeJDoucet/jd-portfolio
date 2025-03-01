import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Container, Text, Button } from '@mantine/core';

import NavItem from '../NavItem';
import { ENavigationOptions, EPage } from '../../types';

import styles from './Layout.module.css';

interface LayoutProps extends PropsWithChildren {
  currentPage: EPage;
  navigateTo: (page: EPage, path: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, navigateTo }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Take the image I just downloaded with the mountains, split the second mountains to create parallax
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down at least 200 pixels
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container
      fluid
      className={styles.backgroundContainer}
    >
      <header className={styles.header}>
        <nav>
          <ul className={styles.navMenu}>
            {currentPage !== EPage.HOME && (
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
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        {showScrollButton && (
          <Button size="sm" variant="gradient" my={10} onClick={scrollToTop}>
            Back to Top
          </Button>
        )}
        <Text size="sm">
          © {new Date().getFullYear()} <i>JD Development & Design</i>
        </Text>
      </footer>
    </Container>
  );
};

export default Layout;
