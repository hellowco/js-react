import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { server } from './server';
import { rest } from 'msw';
import UserProfile from './UserProfile';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays user', async () => {
  render(<UserProfile userId={1} />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('Alice')).toBeInTheDocument());
});
