import React, { Component } from 'react';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    currentPage: 1,
    inputRequest: '',
  };

  onInputSubmit = inputRequest => {
    const normalizedInputRequest = inputRequest.trim().toLowerCase();

    console.log(normalizedInputRequest);

    if (
      !normalizedInputRequest ||
      this.state.inputRequest === normalizedInputRequest
    ) {
      return;
    }

    this.setState({
      currentPage: 1,
      inputRequest: normalizedInputRequest,
    });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onInputSubmit} />

        <ImageGallery
          currentPage={this.state.currentPage}
          inputRequest={this.state.inputRequest}
          onLoadMore={this.onLoadMoreClick}
        />

        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello, this is content</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, aliquid? Sapiente nisi minima ab. Unde consequatur
              quia id nihil distinctio.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )} */}
      </div>
    );
  }
}
