// src/context/ThemeUserContext.jsx
import React, { createContext, useState, useMemo, useCallback } from 'react';

export const ThemeContext = createContext();
export const UserContext = createContext();

export function AppProviders({ children }) {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'Alice' });

  const themeValue = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
  }), [theme]);

  const userValue = useMemo(() => ({
    user,
    setUser
  }), [user]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <UserContext.Provider value={userValue}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
