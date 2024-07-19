import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/HomeContainer';
import About from './pages/About';
import Donate from './pages/Donate';
import Admin from './pages/Admin';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
      <Navbar />
        <Route exact path="/" elements={<Home />} />
        <Route path="/about" elements={<About />} />
        <Route path="/donate" elements={<Donate />} />
        <Route path="/admin" elements={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
