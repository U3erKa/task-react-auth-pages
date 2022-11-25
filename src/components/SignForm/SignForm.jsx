// @ts-check
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignForm.module.scss';

export default class SignForm extends Component {
  createInput = (/** @type {string} */ name, /** @type {string} */ placeholder, /** @type {string?} */ type) => (
    <input
      className={styles.input}
      type={type || name}
      name={name}
      value={this.props[name]}
      placeholder={placeholder}
      onChange={this.props.handleChange}
    />
  );
  createCheckbox = (/** @type {string} */ name, /** @type {string} */ placeholder) => (
    <label>
      <input type="checkbox" name={name} checked={this.props[name]} onChange={this.props.handleChange} />
      {placeholder}
    </label>
  );

  render() {
    const { isRegisterPage, ...otherProps } = this.props;
    return isRegisterPage ? (
      <Register createInput={this.createInput} createCheckbox={this.createCheckbox} {...otherProps} />
    ) : (
      <Login createInput={this.createInput} createCheckbox={this.createCheckbox} />
    );
  }
}

export class Register extends Component {
  render() {
    const { createInput, createCheckbox, handleChange, joinAs } = this.props;
    return (
      <fieldset>
        <h1>CREATE AN ACCOUNT</h1>
        <p>We always keep your name and email address private.</p>
        {createInput('firstName', 'First Name')}
        {createInput('lastName', 'Last Name')}
        {createInput('displayName', 'Display Name')}
        {createInput('email', 'Email Address')}
        {createInput('password', 'Password')}
        {createInput('confirmPassword', 'Password Confirmation', 'password')}
        <label>
          <input type="radio" name="joinAs" value="buyer" checked={joinAs === 'buyer'} onChange={handleChange} />
          Join As a Buyer
          <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
        </label>
        <label>
          <input type="radio" name="joinAs" value="seller" checked={joinAs === 'seller'} onChange={handleChange} />
          Join As a Creative or Marketplace Seller
          <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
        </label>
        {createCheckbox('isSpammed', 'Allow Squadhelp to send marketing/promotional offers from time to time')}
        <button type="submit">Create account</button>
        <p>
          By clicking this button, you agree to our <Link to={'/tos'}>Terms of Service.</Link>
        </p>
      </fieldset>
    );
  }
}

export class Login extends Component {
  render() {
    const { createInput, createCheckbox } = this.props;
    return (
      <fieldset>
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        {createInput('email', 'Email Address')}
        {createInput('password', 'Password')}
        {createCheckbox('isRemembered', 'Remember me')}
        <Link to={'/forgot-password'}>Forgot password</Link>
        <button type="submit">LOGIN</button>
      </fieldset>
    );
  }
}
