import React from 'react';
import { Link } from 'react-router-dom';
import AppRoute from './routes/route';

function App() {
  return (
    <div>
      {/* for adding navbar in future */}
      {/* <nav>
        <Link to="/"></Link>
        <Link to="/doc"></Link>
        <Link to="/qa"></Link>
      </nav> */}
      <AppRoute />
    </div>
  );
}

export default App;
