import { useTheme } from '../context/ThemeContext';
import styles from './DuckCard.module.css';

const DuckCard = ({ duck }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.card} style={{ background: theme.cardBg }}>
      <div className={styles.cardInner}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{duck.name}</h2>
        </div>
        
        <div className={styles.imageContainer}>
          <img 
            src={duck.image} 
            alt={`${duck.name} - ${duck.type} type duck`}
            className={styles.cardImage}
            loading="lazy"
          />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <span 
            className={styles.badge}
            style={{ 
              background: theme.badgeBg,
              color: theme.badgeText 
            }}
          >
            {duck.type}
          </span>
        </div>
        
        <p className={styles.description}>
          {duck.description}
        </p>
      </div>
    </div>
  );
};

export default DuckCard;
