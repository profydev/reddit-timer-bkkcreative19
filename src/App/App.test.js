import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '.';

test('renders Appa', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});
