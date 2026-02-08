import { useTheme } from '../context/ThemeContext';
import styles from './CardGallery.module.css';

const CardGallery = ({ ducks, onSelectDuck }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.gallery}>
      {ducks.map((duck) => (
        <div 
          key={duck.id}
          className={styles.galleryCard}
          style={{
            background: theme.cardBg,
            border: `1px solid ${theme.glassBorder}`
          }}
          onClick={() => onSelectDuck(duck.id - 1)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelectDuck(duck.id - 1);
            }
          }}
          aria-label={`View ${duck.name}`}
        >
          <div className={styles.galleryCardInner}>
            <div className={styles.galleryImageContainer}>
              <img 
                src={duck.image}
                alt={`${duck.name} - ${duck.type} type duck`}
                className={styles.galleryImage}
                loading="lazy"
              />
            </div>
            <h3 className={styles.galleryName} style={{ color: theme.text }}>{duck.name}</h3>
            <span 
              className={styles.galleryBadge}
              style={{
                background: theme.badgeBg,
                color: theme.badgeText
              }}
            >
              {duck.type}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGallery;
