import React, { PropsWithChildren } from 'react';
import { Container, Text, Button } from '@mantine/core';
import { ENavigationOptions } from './types';
import { useLocation } from 'react-router-dom';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const location = useLocation();
  console.log(location.pathname);

  return (
    <Container
      fluid
      style={{
        backgroundImage: 'url(/images/space-wallpaper.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <header style={{ padding: '20px 0' }}>
        <nav>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              padding: 0,
              justifyContent: 'center',
            }}
          >
            {location.pathname !== '/' && (
              <>
                <li style={{ marginRight: 20 }}>
                  <a
                    href={ENavigationOptions.HOME}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    Home
                  </a>
                </li>
                <li style={{ marginRight: 20 }}>
                  <a
                    href={ENavigationOptions.PROJECTS}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href={ENavigationOptions.CONTACT}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    Contact
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer
        style={{ marginTop: '40px', textAlign: 'center', color: 'white' }}
      >
        <Text size="sm">
          © {new Date().getFullYear()} <i>JD Development & Design</i>
        </Text>
        <Button size="sm" variant="gradient" my={10} onClick={scrollToTop}>
          Back to Top
        </Button>
      </footer>
    </Container>
  );
};

export default Layout;
