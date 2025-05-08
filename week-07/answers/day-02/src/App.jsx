import React, { useRef, useEffect, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const prevCountRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <input ref={inputRef} placeholder="Focus me on mount" />
      <p>Current: {count}, Prev: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

export default App;
