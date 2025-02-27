import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

import rocket from '../svgs/rocket.svg';
import styles from './RocketPointer.module.css';

const ROCKET_SIZE = 75;

const RocketPointer = () => {
  const rocketRef = useRef<HTMLImageElement>(null);
  const location = useLocation();
  // Hide on mobile or tablet
  const isMobileOrTablet = useMediaQuery('(max-width: 992px)');

  useEffect(() => {
    const rocketElement = rocketRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (rocketElement) {
        rocketElement.style.left = `${mouseX - rocketElement.clientWidth / 2 + ROCKET_SIZE / 6.5}px`;
        rocketElement.style.top = `${mouseY - rocketElement.clientHeight / 2 + ROCKET_SIZE / 1.5}px`;
      }
    };

    if (location.pathname === '/' && !isMobileOrTablet) {
      document.addEventListener('mousemove', handleMouseMove);
      if (rocketElement) {
        rocketElement.style.display = 'block';
        rocketElement.style.position = 'fixed';
      }
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [location.pathname, isMobileOrTablet]);

  if (location.pathname === '/' && !isMobileOrTablet) {
    return (
      <div className={styles.rocketWrapper}>
        <img
          ref={rocketRef}
          src={rocket}
          alt="rocket-ship"
          width={ROCKET_SIZE}
          style={{
            display: 'none',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      </div>
    );
  }

  return null;
};

export default RocketPointer;
