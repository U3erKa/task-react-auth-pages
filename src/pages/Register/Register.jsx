import React, { Component } from 'react';

class Register extends Component {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    this.props.toggleRegistered(pathname === '/register');
  }

  render() {
    return <main>Register</main>;
  }
}

export default Register;
