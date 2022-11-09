import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteHandler from './Routes';
import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';
import Header from '../shared/components/Header/Header';

function App() {
  return (
    <Router>
      <NormalizeStyles />
      <BaseStyles />
      <Header />
      <RouteHandler />
    </Router>
  );
}

export default App;
