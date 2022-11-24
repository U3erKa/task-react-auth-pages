import React, { Component } from 'react';
import { Login, Register } from '../../components';

class LoginRegister extends Component {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    this.props.toggleRegistered(pathname === '/register');
  }

  render() {
    const {
      location: { pathname },
    } = this.props;
    return <main>{pathname === '/register' ? <Login /> : <Register />}</main>;
  }
}

export default LoginRegister;
