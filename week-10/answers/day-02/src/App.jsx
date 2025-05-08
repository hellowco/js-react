import React, { useState, useCallback } from 'react';
import Child from './Child';

function ChildComponent({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
}

const Child = React.memo(ChildComponent);

export default function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}