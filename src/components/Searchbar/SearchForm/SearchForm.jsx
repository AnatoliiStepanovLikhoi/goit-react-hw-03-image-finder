import PropTypes from 'prop-types';
import { Component } from 'react';

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
    this.props.onSubmit(this.state.inputRequest);
  };

  render() {
    return (
      <form className="form" onSubmit={this.onInputSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
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
