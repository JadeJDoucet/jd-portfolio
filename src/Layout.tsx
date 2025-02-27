import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Text, Button } from '@mantine/core';

import NavItem from './components/NavItem';
import { ENavigationOptions } from './types';

import classes from './Layout.module.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

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
      style={{
        backgroundImage: 'url(/images/space-wallpaper.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <header className={classes.header}>
        <nav>
          <ul className={classes.navMenu}>
            {location.pathname !== '/' && (
              <>
                <NavItem
                  href={ENavigationOptions.HOME}
                  isActive={location.pathname === ENavigationOptions.HOME}
                >
                  Home
                </NavItem>
                <NavItem
                  href={ENavigationOptions.PROJECTS}
                  isActive={location.pathname.includes(ENavigationOptions.PROJECTS)}
                >
                  Projects
                </NavItem>
                <NavItem
                  href={ENavigationOptions.CONTACT}
                  isActive={location.pathname.includes(ENavigationOptions.CONTACT)}
                >
                  Contact
                </NavItem>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={classes.footer}>
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
