import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <main>
      <h1>Homepage</h1>
      <Link to={'/login'}>Login</Link>
    </main>
  );
};

export default Home;
