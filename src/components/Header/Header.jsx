import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from 'img/logo.png';

class Header extends Component {
  render() {
    const { isRegistered } = this.props;

    return (
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link to={'/'}>
                <img src={logo} alt="Homepage" />
              </Link>
            </li>
            <li className={styles.navListItem}>
              {isRegistered ? (
                <Link className={styles.navListItemLink} to={'/login'}>
                  Login
                </Link>
              ) : (
                <Link className={styles.navListItemLink} to={'/register'}>
                  Register
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
