import React from 'react';
import { Anchor } from '@mantine/core';
import rocket from '../svgs/rocket.svg';
import styles from './NavItem.module.css';

interface INavItem {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const ROCKET_SIZE = 75;

const NavItem: React.FC<INavItem> = ({ href, isActive, children }) => {
  return (
    <li className={styles.navItem}>
      <Anchor href={href}>{children}</Anchor>
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