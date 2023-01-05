import { FC } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './Header.module.scss';
// @ts-ignore
import logo from 'img/logo.png';

const Header: FC<{ isRegistered: boolean }> = ({ isRegistered }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link to={'/'}>
              <img className={styles.logo} src={logo} alt="Homepage" />
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link className={styles.navListItemLink} to={isRegistered ? '/login' : '/register'}>
              {isRegistered ? 'Login' : 'Register'}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
