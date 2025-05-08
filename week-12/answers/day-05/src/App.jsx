import React from 'react';
import Hello from './Hello';
import Counter from './Counter';
import Greeting from './Greeting';

export default function App() {
  return (
    <div>
      <Hello name="Test" />
      <Counter />
      <Greeting initial="Hi" />
    </div>
  );
}
