import PropTypes from 'prop-types';
import { SearchForm } from './SearchForm/SearchForm';
import styles from './Searchbar.module.css';

export const SearchBar = ({ onSubmit }) => (
  <header className={styles.searchBar}>
    <SearchForm onSubmit={onSubmit} />
  </header>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
