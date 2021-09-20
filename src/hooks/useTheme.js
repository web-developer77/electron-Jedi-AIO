import { useContext } from 'react';
import ThemeContext  from '../ThemeProvider/index';

const useTheme = () => useContext(ThemeContext);

export default useTheme;