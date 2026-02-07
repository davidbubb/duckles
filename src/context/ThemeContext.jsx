import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from './themes';

const ThemeContext = createContext();

const THEME_STORAGE_KEY = 'duckles-theme';

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Load theme from localStorage or default to 'ocean'
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme && themes[savedTheme] ? savedTheme : 'ocean';
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme]);

  const theme = themes[currentTheme];

  const value = {
    currentTheme,
    theme,
    setTheme: setCurrentTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
