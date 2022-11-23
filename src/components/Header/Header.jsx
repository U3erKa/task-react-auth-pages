import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { isRegistered } = this.props;

    return (
      <header>
        <nav>
          <li>
            <Link to={'/'}>Homepage</Link>
          </li>
          <li>
            {isRegistered ? <Link to={'/login'}>Login</Link> : <Link to={'/register'}>Register</Link>}
          </li>
        </nav>
      </header>
    );
  }
}

export default Header;
