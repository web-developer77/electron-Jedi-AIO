import React, { useState } from 'react';
// import { ThemeProvider } from 'react-bootstrap';
import { Light, Dark } from '../themes/index.';

const initialState = {
  theme: Light,
  setTheme: () => null,
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider(props) {
  const { children } = props;
  const [theme, setTheme] = useState(initialState);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
