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

test('navigates to terms page when terms and prviacy link is clicked', () => {
  const { router } = setup('/terms');

  const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);

  expect(router.state.location.pathname).toEqual('/terms');
});
test('to have to correct href tag', () => {
  setup('/');

  const termsLink = screen.getByTestId('footer-link');
  // const termsLink = screen.getByRole('link', { name: /profy.dev/i });

  expect(termsLink).toHaveAttribute('href', 'https://profy.dev/employers');
});

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /sign\.svg/i });
  userEvent.click(logoLink);

  expect(
    // eslint-disable-next-line comma-dangle
    screen.getByText(/No reactions to your reddit posts?/i)
  ).toBeInTheDocument();
});
