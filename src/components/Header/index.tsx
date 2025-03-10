import { PropsWithChildren } from "react";
import { ENavigationOptions, EPage } from "../../types";
import NavItem from "../NavItem";
import styles from './Header.module.css'

interface HeaderProps extends PropsWithChildren {
  currentPage: EPage;
  navigateTo: (page: EPage, path: string) => void;
}

const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  return (
    currentPage !== EPage.HOME ? (
      <header>
        <ul className={styles.navMenu}>
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
            Work
          </NavItem>
          <NavItem
            onClick={() => navigateTo(EPage.CONTACT, ENavigationOptions.CONTACT)}
            isActive={currentPage === EPage.CONTACT}
          >
            Contact
          </NavItem>
        </ul>
      </header>
    ) : <header className={styles.placeholder} />
  )
}

export default Header;