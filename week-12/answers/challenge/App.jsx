import React from 'react';
import Hello from './Hello';
import Counter from './Counter';
import Greeting from './Greeting';
import UserProfile from './UserProfile';

export default function App() {
  return (
    <div>
      <Hello name="Test" />
      <Counter />
      <Greeting initial="Hi" />
      <UserProfile userId={1} />
    </div>
  );
}
