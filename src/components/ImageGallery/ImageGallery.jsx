import { Component } from 'react';
import { Notify } from 'notiflix';
// import PropTypes from 'prop-types';
// import { MagnifyingGlass } from 'react-loader-spinner';
import { fetchData } from 'components/Utils/fetchApi';

// Notify.init({
//   distance: '20px',
//   cssAnimationStyle: 'from-top',
//   fontSize: '16px',
//   // useFontAwesome: true,
//   timeout: 2000,
//   backOverlay: true,
//   // plainText: false,
//   clickToClose: true,
// });

export class ImageGallery extends Component {
  state = {
    status: 'idle',
    galleryHits: [],
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    // console.log(this.props);

    const { currentPage, inputRequest } = this.props;

    if (prevProps.currentPage === currentPage && prevProps.inputRequest) {
      return;
    }

    this.setState({
      status: 'pending',
    });

    const fetchedImages = await fetchData(inputRequest, currentPage);
    console.log(fetchedImages);

    if (fetchedImages === `error`) {
      return this.setState({
        status: 'rejected',
      });
    }

    if (fetchedImages.hits.length === 0) {
      return this.setState({
        status: 'failed',
      });
    }

    this.setState({
      status: 'resolved',
      totalHits: fetchedImages.totalHits,
      galleryHits:
        currentPage === 1
          ? fetchedImages.hits
          : [...this.state.galleryHits, ...fetchedImages.hits],
    });
  }

  render() {
    const { status, galleryHits, totalHits } = this.state;
    const { currentPage, onLoadMore } = this.props;

    if (status === 'idle') {
      Notify.success('lets start');
    }

    return <ul></ul>;
  }
}
