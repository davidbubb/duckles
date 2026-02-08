import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from './themes';

const ThemeContext = createContext();

const THEME_STORAGE_KEY = 'duckles-theme';

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Load theme from localStorage or default to 'system'
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme || 'system';
  });

  const [systemTheme, setSystemTheme] = useState(() => {
    // Detect system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Listen for system theme changes
  useEffect(() => {
    if (!window.matchMedia) return;

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme]);

  // Resolve the actual theme based on system preference
  const resolvedTheme = currentTheme === 'system' ? systemTheme : currentTheme;
  const theme = themes[resolvedTheme] || themes.ocean;

  const value = {
    currentTheme,
    resolvedTheme,
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
