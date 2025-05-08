import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('App integration test', async () => {
  render(<App />);
  // Hello
  expect(screen.getByText('Hello, Test!')).toBeInTheDocument();
  // Counter
  const btn = screen.getByText('+');
  fireEvent.click(btn);
  expect(screen.getByTestId('count').textContent).toBe('1');
  // Greeting initial render
  expect(screen.getByText('Hi')).toBeInTheDocument();
  // Re-render Greeting by updating prop (simplified)
});
