import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Home';
import Search from '../Search';

const RouteHandler = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/search', element: <Search /> },
  ]);

  return element;
};
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/search" element={<Search />} />
// </Routes>

export default RouteHandler;
