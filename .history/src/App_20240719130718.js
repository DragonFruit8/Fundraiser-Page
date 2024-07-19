import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
