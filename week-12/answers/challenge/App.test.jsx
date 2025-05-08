import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { server } from './server';
import App from './App';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('integrated App', async () => {
  render(<App />);
  // Hello
  expect(screen.getByText('Hello, Test!')).toBeInTheDocument();
  // Counter
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count').textContent).toBe('1');
  // Greeting initial
  expect(screen.getByText('Hi')).toBeInTheDocument();
  // UserProfile
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('Alice')).toBeInTheDocument());
});
