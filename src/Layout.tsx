import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Text, Button, Anchor } from '@mantine/core';

import RocketPointer from './components/RocketPointer';
import { ENavigationOptions } from './types';

import classes from './Layout.module.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const projectsRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const location = useLocation();

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
                <li style={{ marginRight: 20 }}>
                  <Anchor href={ENavigationOptions.HOME}>Home</Anchor>
                </li>
                <li style={{ marginRight: 20 }} ref={projectsRef}>
                  <Anchor href={ENavigationOptions.PROJECTS}>Projects</Anchor>
                </li>
                <li ref={contactRef}>
                  <Anchor href={ENavigationOptions.CONTACT}>Contact</Anchor>
                </li>
              </>
            )}
          </ul>
        </nav>
        <RocketPointer projectsRef={projectsRef} contactRef={contactRef} />
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
