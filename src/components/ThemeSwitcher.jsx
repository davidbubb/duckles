import { useTheme } from '../context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme, themes, theme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <label htmlFor="theme-select" className={styles.label} style={{ color: theme.text }}>
        Choose Theme:
      </label>
      <select 
        id="theme-select"
        className={styles.select}
        style={{
          background: theme.cardBg,
          backdropFilter: `blur(${theme.glassBlur})`,
          border: `2px solid ${theme.glassBorder}`,
          color: theme.text
        }}
        value={currentTheme}
        onChange={(e) => setTheme(e.target.value)}
        aria-label="Select color theme"
      >
        <option value="system">🖥️ System</option>
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
