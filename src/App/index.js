import React from 'react';

// import { RouterProvider } from 'react-router-dom';
import Layout from '../shared/components/Layout/Layout';
import RouteHandler from './Routes';

function App() {
  return (
    <>
      <Layout />
      <RouteHandler />
    </>
  );
}

export default App;
