import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Login, Register, NotFound } from './pages';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Login} />
        <Route path="/contacts" exact component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
