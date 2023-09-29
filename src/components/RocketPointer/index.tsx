import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import rocket from '../svgs/rocket.svg';
import classes from './RocketPointer.module.css';
import { ENavigationOptions } from '../../types';

interface IRocketPointer {
  projectsRef: React.RefObject<HTMLLIElement>;
  contactRef: React.RefObject<HTMLLIElement>;
}

const ROCKET_SIZE = 32;

const RocketPointer: React.FC<IRocketPointer> = ({
  projectsRef,
  contactRef,
}) => {
  const rocketRef = useRef<HTMLImageElement>(null);
  const location = useLocation();

  const [style, setStyle] = useState<React.CSSProperties>({
    display: 'block',
    position: 'fixed',
    pointerEvents: 'none',
  });

  useEffect(() => {
    const rocketElement = rocketRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Set the position of the rocket image to follow the cursor
      if (rocketElement) {
        rocketElement.style.left = `${
          mouseX - rocketElement.clientWidth / 2
        }px`;
        rocketElement.style.top = `${
          mouseY - rocketElement.clientHeight / 2 + ROCKET_SIZE + 7
        }px`;
      }
    };

    if (location.pathname === '/') {
      // Add a mousemove event listener to track cursor movement
      document.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (
      !location.pathname.includes(`${ENavigationOptions.CONTACT}`) &&
      !location.pathname.includes(`${ENavigationOptions.PROJECTS}`)
    ) {
      setStyle((prev) => ({ ...prev }));
    }

    let navItemRef = location.pathname.includes(`${ENavigationOptions.CONTACT}`)
      ? contactRef
      : projectsRef;

    if (navItemRef.current) {
      const navItemRect = navItemRef.current.getBoundingClientRect();
      setStyle((prev) => ({
        ...prev,
        justifySelf: 'flex-end',
        left: `${navItemRect.left + ROCKET_SIZE / 2}px`,
        top: `${navItemRect.top + ROCKET_SIZE}px`,
      }));
    }
  }, [location.pathname, contactRef, projectsRef]);

  return (
    <div className={classes.rocketWrapper}>
      <img
        ref={rocketRef}
        src={rocket}
        alt="rocket-ship"
        width={ROCKET_SIZE}
        style={style}
      />
    </div>
  );
};

export default RocketPointer;
