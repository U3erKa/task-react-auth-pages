import React, { Component } from 'react';

class Register extends Component {
  componentDidMount() {
    this.props.toggleRegistered(true);
  }

  render() {
    return (
      <main>
        Register
      </main>
    );
  }
}

export default Register;
