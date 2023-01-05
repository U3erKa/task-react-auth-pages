import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Header } from 'components';
// @ts-expect-error
import styles from './LoginRegister.module.scss';

const initialValues = {
  email: '',
  password: '',
  isRemembered: false,
};

const Login: FC = () => {
  return (
    <>
      <Header isRegistered={false} />

      <Formik initialValues={initialValues} onSubmit={console.log}>
        <Form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <h1 className={styles.headingLogin}>LOGIN TO YOUR ACCOUNT</h1>

            <Field name="email" type="text" placeholder="Email Address" className={styles.inputLogin} />
            <Field name="password" type="password" placeholder="Password" className={styles.inputLogin} />
            <label className={styles.inputLoginCheckbox}>
              <Field type="checkbox" name="isRemembered" />
              Remember me
            </label>

            <Link to={'/forgot-password'} className={styles.forgotPasswordLink}>
              Forgot password
            </Link>
            <button type="submit" className={styles.submitBtn}>
              LOGIN
            </button>
          </fieldset>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
