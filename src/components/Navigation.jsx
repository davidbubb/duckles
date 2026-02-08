import { useTheme } from '../context/ThemeContext';
import styles from './Navigation.module.css';

const Navigation = ({ currentIndex, totalDucks, onPrevious, onNext, onRandom }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.navigation}>
      <button 
        className={`${styles.button} ${styles.navButton}`}
        onClick={onPrevious}
        disabled={currentIndex === 0}
        style={{
          background: theme.cardBg,
          color: theme.text,
          border: `2px solid ${theme.glassBorder}`
        }}
        aria-label="Previous duck"
      >
        ← Previous
      </button>
      
      <div 
        className={styles.counter} 
        style={{ 
          color: theme.text,
          background: theme.cardBg,
          border: `2px solid ${theme.glassBorder}`
        }}
      >
        {currentIndex + 1} / {totalDucks}
      </div>
      
      <button 
        className={`${styles.button} ${styles.navButton}`}
        onClick={onNext}
        disabled={currentIndex === totalDucks - 1}
        style={{
          background: theme.cardBg,
          color: theme.text,
          border: `2px solid ${theme.glassBorder}`
        }}
        aria-label="Next duck"
      >
        Next →
      </button>
      
      <button 
        className={`${styles.button} ${styles.randomButton}`}
        onClick={onRandom}
        aria-label="Random duck"
      >
        🎲 Random
      </button>
    </div>
  );
};

export default Navigation;
