import PropTypes from 'prop-types';
import { Component } from 'react';

import { OnSearchButton } from 'components/Button/Button';
import styles from './SearchForm.module.css';

export class SearchForm extends Component {
  state = {
    inputRequest: '',
  };

  onInputUpdate = ({ target }) => {
    this.setState({
      inputRequest: target.value,
    });
  };

  onInputSubmit = event => {
    event.preventDefault();
    console.log('searchform', this.state.inputRequest);
    this.props.onSubmit(this.state.inputRequest);
  };

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.onInputSubmit}>
        <OnSearchButton />
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.onInputUpdate}
          value={this.state.inputRequest}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
