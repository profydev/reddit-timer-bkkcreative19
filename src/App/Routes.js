import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Search from '../pages/search';

const RouteHandler = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);

export default RouteHandler;
