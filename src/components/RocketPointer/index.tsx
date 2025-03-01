import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@mantine/hooks';

import Rocket, { DEFAULT_ROCKET_SIZE } from '../Rocket';

const RocketPointer = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  // Hide on mobile or tablet
  const isMobileOrTablet = useMediaQuery('(max-width: 992px)');

  useEffect(() => {
    const rocketElement = rocketRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (rocketElement) {
        rocketElement.style.left = `${(mouseX - rocketElement.clientWidth / 2 + DEFAULT_ROCKET_SIZE / 6.5) - 5}px`;
        rocketElement.style.top = `${(mouseY - rocketElement.clientHeight / 2 + DEFAULT_ROCKET_SIZE / 1.5) + 10}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    if (rocketElement) {
      rocketElement.style.display = 'block';
      rocketElement.style.position = 'fixed';
    }


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobileOrTablet]);

  return (
    (!isMobileOrTablet && (
      <div ref={rocketRef} style={{ zIndex: 1000 }}>
        <Rocket animationState="stable" />
      </div>
    )) || null
  );
};

export default RocketPointer;
