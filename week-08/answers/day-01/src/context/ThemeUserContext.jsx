import React, { createContext, useState, useMemo, useCallback } from 'react';

export const ThemeContext = createContext();
export const UserContext = createContext();

export function AppProviders({ children }) {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'Alice' });

  const valueTheme = useMemo(() => ({ theme, toggle: () => setTheme(t => t==='light'?'dark':'light') }), [theme]);
  const valueUser = useMemo(() => ({ user, setUser }), [user]);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <UserContext.Provider value={valueUser}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
