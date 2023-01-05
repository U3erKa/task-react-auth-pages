import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Header } from 'components';
// @ts-expect-error
import styles from './LoginRegister.module.scss';

// const toggleInputType = (type: string) => {
//   setState({ [type]: state[type] === 'input' ? 'password' : 'input' });
// };

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  joinAs: '',
  isSpammed: false,
};

const Register: FC = () => {
  return (
    <>
      <Header isRegistered={true} />

      <Formik initialValues={initialValues} onSubmit={console.log}>
        <Form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <h1 className={styles.headingRegister}>CREATE AN ACCOUNT</h1>
            <p className={styles.subHeading}>We always keep your name and email address private.</p>

            <Field name="firstName" type="text" placeholder="First Name" className={styles.inputRegister} />
            <Field name="lastName" type="text" placeholder="Last Name" className={styles.inputRegister} />
            <Field name="displayName" type="text" placeholder="Display Name" className={styles.inputRegister} />
            <Field name="email" type="text" placeholder="Email Address" className={styles.inputRegister} />
            <Field name="password" type="password" placeholder="Password" className={styles.inputRegister} />
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Password Confirmation"
              className={styles.inputRegister}
            />

            <label className={styles.label}>
              <Field type="radio" name="joinAs" value="buyer" />
              Join As a Buyer
              <p className={styles.labelText}>
                I am looking for a Name, Logo or Tagline for my business, brand or product.
              </p>
            </label>
            <label className={styles.label}>
              <Field type="radio" name="joinAs" value="seller" />
              Join As a Creative or Marketplace Seller
              <p className={styles.labelText}>
                I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.
              </p>
            </label>

            <label className={styles.inputRegisterCheckbox}>
              <Field type="checkbox" name="isSpammed" />
              Allow Squadhelp to send marketing/promotional offers from time to time
            </label>

            <button type="submit" className={styles.submitBtn}>
              Create account
            </button>
            <p>
              By clicking this button, you agree to our
              <Link to={'/tos'} className={styles.tosLink}>
                Terms of Service.
              </Link>
            </p>
          </fieldset>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
