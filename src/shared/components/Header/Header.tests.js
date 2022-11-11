/* eslint-disable comma-dangle */
import React from 'react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from '../../../App';

const setup = (initialPath = '/') => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests

  const routes = [
    {
      path: '*',
      element: <App />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: [initialPath],
    initialIndex: 0,
  });

  render(<RouterProvider router={router} />);
  return { router };
};

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLink);

  expect(
    // eslint-disable-next-line comma-dangle
    screen.getByText(/No reactions to your reddit posts/i),
  ).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', () => {
  const { router } = setup();

  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);

  expect(
    screen.findByText(/Find the best time for a subreddit/i),
  ).toBeInTheDocument();
  expect(router.state.location.pathname).toEqual('/search/javascript');
});

test.each`
  link              | hash
  ${'About'}        | ${'#about'}
  ${'How it works'} | ${'#how-it-works'}
`(
  'navigates to "$link" section when "$link" link is clicked',
  ({ link, hash }) => {
    const { router } = setup('/search/javascript');

    const hashLink = screen.getByRole('link', { name: link });
    userEvent.click(hashLink);

    expect(
      screen.getByText(/No reactions to your reddit posts/i),
    ).toBeInTheDocument();
    expect(router.state.location.hash).toEqual(hash);
  },
);
