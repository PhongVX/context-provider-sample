import * as React from "react";
import { ThemeContext } from './context';

interface ThemeProviderProps {
  children: any
}
ThemeContext.displayName = 'ThemeContext123';

export const useTheme = () => { 
  return React.useContext(ThemeContext)
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [themeState, setThemeState] = React.useState<string>('dark')
  const updateTheme = (e:any) => {
    setThemeState(e.target.checked ? 'dark' : 'light' );
  };
  return (
    <ThemeContext.Provider value={{
      mode: themeState,
      updateTheme
    }}>
      <div className={themeState}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider


