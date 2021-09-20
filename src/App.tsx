import React, { useContext, useState, useMemo } from 'react';
import SubApp from './SubApp';
import ThemeContext from './Context/ThemeContext';

export default function App() {
  const [theme, setTheme] = useState('');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      <SubApp />
    </ThemeContext.Provider>
  );
}
