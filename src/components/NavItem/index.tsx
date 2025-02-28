import React from 'react';
import { Text } from '@mantine/core';
import rocket from '../svgs/rocket.svg';
import styles from './NavItem.module.css';

interface INavItem {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

const ROCKET_SIZE = 75;

const NavItem: React.FC<INavItem> = ({ onClick, isActive, children }) => {
  return (
    <li className={styles.navItem}>
      <Text component="a" onClick={onClick} style={{ cursor: 'pointer' }}>
        {children}
      </Text>
      <img
        src={rocket}
        alt="rocket-indicator"
        width={ROCKET_SIZE}
        className={`${styles.rocket} ${isActive ? styles.visible : ''}`}
      />
    </li>
  );
};

export default NavItem; 