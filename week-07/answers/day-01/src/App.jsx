import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted');
  }, []);

  useEffect(() => {
    if (count > 0) console.log('Updated');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}

export default App;
