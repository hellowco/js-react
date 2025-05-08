import React, { useState } from 'react';

export default function Counter({ initialValue, step = 1 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + step)}>+</button>
      <button
        onClick={() =>
          setCount(prev => (prev - step >= 0 ? prev - step : 0))
        }
        disabled={count <= 0}
      >
        –
      </button>
    </div>
  );
}
