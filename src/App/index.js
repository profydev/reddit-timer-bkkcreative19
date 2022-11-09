import React from 'react';
import RouteHandler from './Routes';
import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';

function App() {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <RouteHandler />
    </>
  );
}

export default App;
