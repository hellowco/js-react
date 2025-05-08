// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Gallery from './components/Gallery';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Gallery />
    </ThemeProvider>
  );
}
