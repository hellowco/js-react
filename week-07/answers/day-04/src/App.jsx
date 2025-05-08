import React, { useState } from 'react';
import CounterChild from './CounterChild';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Parent Count: {count}</p>
      <CounterChild count={count} onIncrement={() => setCount(c => c + 1)} />
    </div>
  );
}

export default App;
