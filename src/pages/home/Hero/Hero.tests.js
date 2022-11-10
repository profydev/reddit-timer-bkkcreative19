// import React from 'react';

// import { createMemoryRouter, RouterProvider } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';

// import userEvent from '@testing-library/user-event';
// // import App from '../../../App';
// // import Hero from './Hero';
// // import Hero from './Hero';
// // import Home from '../Home';
// import Hero from './Hero';

// const setup = (initialPath = '/') => {
//   // access history as described in the docs
//   // https://reactrouter.com/web/guides/testing/checking-location-in-tests

//   const routes = [
//     {
//       path: '/',
//       element: <Hero />,
//     },
//   ];

//   const router = createMemoryRouter(routes, {
//     initialEntries: [initialPath],
//     initialIndex: 0,
//   });

//   render(<RouterProvider router={router} />);
//   return { router };
// };

// test('navigates to search page when button is clicked', () => {
//   setup('/search/javascript');

//   //   const buttonLink = screen.getByRole('link', {
//   //     name: /Show me the best time/i,
//   //   });
//   screen.debug();
//   const heading = screen.getByRole('heading', {
//     name: /No reactions to your reddit posts/i,
//   });

//   userEvent.click(heading);

//   //   expect(screen.getByText(/search page/i)).toBeInTheDocument();
//   //   expect(router.state.location.pathname).toEqual('/search/javascript');
// });
