import PropTypes from 'prop-types';

import { SearchForm } from './SearchForm/SearchForm';

export const SearchBar = ({ onSubmit }) => (
  <header className="searchBar">
    <SearchForm onSubmit={onSubmit} />
  </header>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
