import React, { Component } from 'react';

class Login extends Component {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    this.props.toggleRegistered(pathname === '/register');
  }

  render() {
    return <main>Login</main>;
  }
}

export default Login;
