import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('updates on prop change', () => {
  const { rerender } = render(<Greeting initial="Hi" />);
  expect(screen.getByText('Hi')).toBeInTheDocument();
  rerender(<Greeting initial="Hello" />);
  expect(screen.getByText('Hello!')).toBeInTheDocument();
});
