import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Login, Register, LoginRegister, NotFound } from './pages';
import './App.css';

function App() {
  const [isRegistered, setIsRegistered] = useState();

  function toggleRegistered(state) {
    setIsRegistered(state);
  }

  return (
    <>
      <Header isRegistered={isRegistered} />
      <Switch>
        <Route path="/" exact component={() => <Home toggleRegistered={toggleRegistered} />} />
        {/* <Route
          path="/login"
          exact
          component={(routerProps) => <Login toggleRegistered={toggleRegistered} {...routerProps} />}
        />
        <Route
          path="/register"
          exact
          component={(routerProps) => <Register toggleRegistered={toggleRegistered} {...routerProps} />}
        /> */}
        <Route
          path="/login"
          exact
          component={(routerProps) => <LoginRegister toggleRegistered={toggleRegistered} {...routerProps} />}
        />
        <Route
          path="/register"
          exact
          component={(routerProps) => <LoginRegister toggleRegistered={toggleRegistered} {...routerProps} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
