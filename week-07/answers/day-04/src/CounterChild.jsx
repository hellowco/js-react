import React from 'react';

export default function CounterChild({ count, onIncrement }) {
  return (
    <div>
      <p>Child Count: {count}</p>
      <button onClick={onIncrement}>Increase Parent</button>
    </div>
  );
}
