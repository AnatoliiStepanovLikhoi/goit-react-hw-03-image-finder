import { Component } from 'react';
// import PropTypes from 'prop-types';

// import { MagnifyingGlass } from 'react-loader-spinner';
import { fetchData } from 'components/Utils/fetchApi';

export class ImageGallery extends Component {
  state = {
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    // console.log(this.props);

    const { currentPage, inputRequest } = this.props;

    const images = await fetchData(inputRequest, currentPage);

    console.log(images);
  }

  render() {
    return <ul></ul>;
  }
}
