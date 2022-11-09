import React from 'react';
import RouteHandler from './Routes';
import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';
import Header from '../shared/components/Header/Header';

function App() {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Header />
      <RouteHandler />
    </>
  );
}

export default App;
