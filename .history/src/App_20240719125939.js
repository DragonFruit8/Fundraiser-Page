import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Admin from './pages/Admin';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route exact path="/" elements={<Home />} />
        <Route path="/about" elements={<About />} />
        <Route path="/donate" elements={<Donate />} />
        <Route path="/admin" elements={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
