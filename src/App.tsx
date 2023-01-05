import { Switch, Route } from 'react-router-dom';
import { Home, Login, NotFound, Register } from 'pages';
import './App.scss';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
