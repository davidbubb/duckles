import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import DuckCard from './components/DuckCard';
import Navigation from './components/Navigation';
import CardGallery from './components/CardGallery';
import ThemeSwitcher from './components/ThemeSwitcher';
import ducksData from './data/ducks.json';
import styles from './App.module.css';
import './styles/global.css';

const AppContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'gallery'
  const { theme } = useTheme();

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < ducksData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRandom = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * ducksData.length);
    } while (newIndex === currentIndex && ducksData.length > 1);
    setCurrentIndex(newIndex);
  };

  const handleSelectDuck = (index) => {
    setCurrentIndex(index);
    setViewMode('card');
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Swipe gesture handling for mobile
  const bind = useDrag(
    ({ swipe: [swipeX] }) => {
      if (swipeX === -1) {
        // Swipe left - next
        handleNext();
      } else if (swipeX === 1) {
        // Swipe right - previous
        handlePrevious();
      }
    },
    {
      axis: 'x',
      swipe: {
        velocity: 0.3,
        distance: 50
      }
    }
  );

  return (
    <div className={styles.app} style={{ backgroundColor: theme.background }}>
      <header className={styles.header}>
        <h1 className={styles.title} style={{color: theme.primary}}>Duckles and Friends</h1>
        <p className={styles.subtitle} style={{color: theme.primary}}>Heath's duck army</p>
      </header>

      <ThemeSwitcher />

      <div className={styles.viewToggle}>
        <button
          className={`${styles.toggleButton} ${viewMode === 'card' ? styles.active : ''}`}
          onClick={() => setViewMode('card')}
          style={{ color: viewMode === 'card' ? theme.primary : theme.primary }}
          aria-pressed={viewMode === 'card'}
        >
          📇 Card View
        </button>
        <button
          className={`${styles.toggleButton} ${viewMode === 'gallery' ? styles.active : ''}`}
          onClick={() => setViewMode('gallery')}
          style={{ color: viewMode === 'gallery' ? theme.primary : theme.primary }}
          aria-pressed={viewMode === 'gallery'}
        >
          🎴 Gallery View
        </button>
      </div>

      <main className={styles.content}>
        {viewMode === 'card' ? (
          <>
            <div {...bind()} className={styles.cardContainer}>
              <DuckCard duck={ducksData[currentIndex]} />
              <div className={styles.swipeHint} style={{ color: theme.primary }}>
                👆 Swipe left or right on mobile
              </div>
            </div>
            <Navigation
              currentIndex={currentIndex}
              totalDucks={ducksData.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onRandom={handleRandom}
            />
          </>
        ) : (
          <CardGallery ducks={ducksData} onSelectDuck={handleSelectDuck} />
        )}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
