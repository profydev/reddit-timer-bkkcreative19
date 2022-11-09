import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Search from '../Search';

const RouteHandler = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>
);

export default RouteHandler;