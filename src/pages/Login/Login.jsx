import React, { Component } from 'react';

class Login extends Component {
  componentDidMount() {
    this.props.toggleRegistered(false);
  }

  render() {
    return (
      <main>
        Login
      </main>
    );
  }
}

export default Login;
