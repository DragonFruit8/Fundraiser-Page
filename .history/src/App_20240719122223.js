import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/donate" component={Donate} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
