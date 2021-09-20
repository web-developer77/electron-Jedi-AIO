import React from 'react';

const initialState = {
  theme: '',
  setTheme: () => {},
};

const ThemeContext = React.createContext(initialState);

export default ThemeContext;
