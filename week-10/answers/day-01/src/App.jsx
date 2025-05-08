import React, { useState, useMemo } from 'react';

function heavyFactorial(n) {
  console.log('Calculating factorial');
  return n <= 1 ? 1 : n * heavyFactorial(n - 1);
}

export default function App() {
  const [num, setNum] = useState(5);
  const result = useMemo(() => heavyFactorial(num), [num]);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={e => setNum(Number(e.target.value))}
      />
      <p>Factorial: {result}</p>
    </div>
  );
}