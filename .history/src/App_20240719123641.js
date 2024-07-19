import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar >
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
      </Navbar>
    </Router>
  );
};

export default App;
