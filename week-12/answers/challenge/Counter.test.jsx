import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count').textContent).toBe('1');
});
