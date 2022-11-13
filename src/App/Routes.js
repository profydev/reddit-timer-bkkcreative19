// import React from 'react';
// import {
//   Route, createBrowserRouter, createRoutesFromElements,
// } from 'react-router-dom';
// import Home from '../pages/home';
// import Search from '../pages/search';
// import Layout from '../shared/components/Layout/Layout';

// const Router = createBrowserRouter(createRoutesFromElements(

//   <Route path="/" element={<Layout />}>
//     <Route index element={<Home />} />
//     <Route path="/search/:name" element={<Search />} />
//   </Route>,

// ));

// export default Router;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Search from '../pages/search';

const RouteHandler = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search">
      <Route index element={<Search />} />
      <Route path=":name" element={<Search />}>
        <Route path=":num" element={<Search />} />
      </Route>
    </Route>
    {/* <Route path="/search/:name/:num?" element={<Search />} /> */}
  </Routes>
);

export default RouteHandler;
