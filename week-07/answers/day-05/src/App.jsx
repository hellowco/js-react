import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

function ThemedComponent() {
  const { theme, toggle } = useContext(ThemeContext);
  const style = { background: theme === 'light' ? '#fff' : '#333', padding: '20px' };
  return (
    <div style={style}>
      <p>Theme: {theme}</p>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
