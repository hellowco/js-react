// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { toggle } = useContext(ThemeContext);
  return <button onClick={toggle}>Toggle Theme</button>;
}
