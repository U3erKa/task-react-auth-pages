// @ts-check
import React, { Component } from 'react';
import { SignForm } from '../../components';

export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
  }
  get isRegisterPage() {
    const {
      location: { pathname },
    } = this.props;
    return pathname === '/register';
  }
  get initialState() {
    return this.isRegisterPage
      ? {
          firstName: '',
          lastName: '',
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
          joinAs: '',
          isSpammed: false,
        }
      : {
          email: '',
          password: '',
          isRemembered: false,
        };
  }

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    this.props.toggleRegistered(pathname === '/register');
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.initialState });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SignForm handleChange={this.handleChange} isRegisterPage={this.isRegisterPage} {...this.state} />
      </form>
    );
  }
}
