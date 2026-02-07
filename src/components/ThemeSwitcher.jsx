import { useTheme } from '../context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme, themes, theme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <label htmlFor="theme-select" className={styles.label} style={{ color: theme.primary }}>
        Choose Theme:
      </label>
      <select 
        id="theme-select"
        className={styles.select}
        value={currentTheme}
        onChange={(e) => setTheme(e.target.value)}
        aria-label="Select color theme"
      >
        {Object.entries(themes).map(([key, theme]) => (
          <option key={key} value={key}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
