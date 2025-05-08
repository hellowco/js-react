import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments count', () => {
  render(<Counter />);
  const btn = screen.getByText('+');
  fireEvent.click(btn);
  expect(screen.getByTestId('count').textContent).toBe('1');
});
