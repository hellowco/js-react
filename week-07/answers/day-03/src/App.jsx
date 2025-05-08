import React from 'react';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <p>Width: {width}, Height: {height}</p>
    </div>
  );
}

export default App;
