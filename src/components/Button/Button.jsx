import { FcSearch } from 'react-icons/fc';
import styles from './Button.module.css';

export const OnSearchButton = () => (
  <button type="submit" className={styles.searchButton}>
    <span className={styles.visuallyHidden}>Search</span>
    <FcSearch className={styles.searchIcon} />
  </button>
);
