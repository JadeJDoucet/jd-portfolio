import React, { useState, useEffect, useRef } from 'react';
import { Text } from '@mantine/core';
import styles from './NavItem.module.css';
import Rocket from '../Rocket';

interface INavItem {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

const ROCKET_SIZE = 75;

const NavItem: React.FC<INavItem> = ({ onClick, isActive, children }) => {
  const [showRocket, setShowRocket] = useState(isActive);
  const [animationState, setAnimationState] = useState<'in' | 'out' | 'stable'>(isActive ? 'stable' : 'out');
  const prevActiveRef = useRef(isActive);

  useEffect(() => {
    // If state changed from inactive to active
    if (!prevActiveRef.current && isActive) {
      setShowRocket(true);
      setAnimationState('in');
      prevActiveRef.current = true;

      // Reset animation state to stable after animation completes
      const timer = setTimeout(() => {
        setAnimationState('stable');
      }, 1000); // Match this with the animation duration

      return () => clearTimeout(timer);
    }

    // If state changed from active to inactive
    if (prevActiveRef.current && !isActive) {
      setAnimationState('out');
      prevActiveRef.current = false;
      // Wait for animation to complete before hiding the rocket
      const timer = setTimeout(() => {
        setShowRocket(false);
      }, 1000); // Match this with the animation duration

      return () => clearTimeout(timer);
    }

    prevActiveRef.current = isActive;
  }, [isActive]);

  return (
    <li className={styles.navItem}>
      <Text component="a" onClick={onClick} style={{ cursor: 'pointer' }}>
        {children}
      </Text>
      {showRocket && (
        <div>
          <Rocket animationState={animationState} />
        </div>
      )}
    </li>
  );
};

export default NavItem; 