// @ts-check
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignForm.module.scss';

export default class SignForm extends Component {
  constructor(props) {
    super(props);
    this.state = { passwordType: 'password', confirmPasswordType: 'password' };
  }
  createInput = (/** @type {string} */ name, /** @type {string} */ placeholder, /** @type {string?} */ type) =>
    type === 'password' ? (
      <label className={this.props.isRegisterPage ? styles.labelRegister : styles.labelLogin}>
        <input
          className={this.props.isRegisterPage ? styles.inputRegister : styles.inputLogin}
          type={this.state[`${name}Type`]}
          name={name}
          value={this.props[name]}
          placeholder={placeholder}
          onChange={this.props.handleChange}
        />
        {type === 'password' && (
          <button className={styles.passwordBtn} type="button" onClick={() => this.toggleInputType(`${name}Type`)}>
            👁
          </button>
        )}
      </label>
    ) : (
      <input
        className={this.props.isRegisterPage ? styles.inputRegister : styles.inputLogin}
        type={type || name}
        name={name}
        value={this.props[name]}
        placeholder={placeholder}
        onChange={this.props.handleChange}
      />
    );
  createCheckbox = (/** @type {string} */ name, /** @type {string} */ placeholder) => (
    <label className={this.props.isRegisterPage ? styles.inputRegisterCheckbox : styles.inputLoginCheckbox}>
      <input type="checkbox" name={name} checked={this.props[name]} onChange={this.props.handleChange} />
      {placeholder}
    </label>
  );
  toggleInputType(/** @type {string} */ type) {
    this.setState({ [type]: this.state[type] === 'input' ? 'password' : 'input' });
  }

  render() {
    const { isRegisterPage, ...otherProps } = this.props;
    return isRegisterPage ? (
      <Register createInput={this.createInput} createCheckbox={this.createCheckbox} {...otherProps} />
    ) : (
      <Login createInput={this.createInput} createCheckbox={this.createCheckbox} {...otherProps} />
    );
  }
}

export class Register extends Component {
  render() {
    const { createInput, createCheckbox, handleChange, handleSubmit, joinAs } = this.props;
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <h1 className={styles.headingRegister}>CREATE AN ACCOUNT</h1>
          <p className={styles.subHeading}>We always keep your name and email address private.</p>
          {createInput('firstName', 'First Name', 'input')}
          {createInput('lastName', 'Last Name', 'input')}
          {createInput('displayName', 'Display Name', 'input')}
          {createInput('email', 'Email Address')}
          {createInput('password', 'Password', 'password')}
          {createInput('confirmPassword', 'Password Confirmation', 'password')}
          <label className={styles.label}>
            <input type="radio" name="joinAs" value="buyer" checked={joinAs === 'buyer'} onChange={handleChange} />
            Join As a Buyer
            <p className={styles.labelText}>
              I am looking for a Name, Logo or Tagline for my business, brand or product.
            </p>
          </label>
          <label className={styles.label}>
            <input type="radio" name="joinAs" value="seller" checked={joinAs === 'seller'} onChange={handleChange} />
            Join As a Creative or Marketplace Seller
            <p className={styles.labelText}>
              I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.
            </p>
          </label>
          {createCheckbox('isSpammed', 'Allow Squadhelp to send marketing/promotional offers from time to time')}
          <button type="submit" className={styles.submitBtn}>
            Create account
          </button>
          <p>
            By clicking this button, you agree to our{' '}
            <Link to={'/tos'} className={styles.tosLink}>
              Terms of Service.
            </Link>
          </p>
        </fieldset>
      </form>
    );
  }
}

export class Login extends Component {
  render() {
    const { createInput, createCheckbox, handleSubmit } = this.props;
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <h1 className={styles.headingLogin}>LOGIN TO YOUR ACCOUNT</h1>
          {createInput('email', 'Email Address')}
          {createInput('password', 'Password', 'password')}
          {createCheckbox('isRemembered', 'Remember me')}
          <Link to={'/forgot-password'} className={styles.forgotPasswordLink}>
            Forgot password
          </Link>
          <button type="submit" className={styles.submitBtn}>
            LOGIN
          </button>
        </fieldset>
      </form>
    );
  }
}
