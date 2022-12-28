import { Component } from 'react';
import { Notify } from 'notiflix';
// import PropTypes from 'prop-types';
import { fetchData } from 'components/Utils/fetchApi';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';

Notify.init({
  distance: '20px',
  cssAnimationStyle: 'from-top',
  fontSize: '16px',
  // useFontAwesome: true,
  timeout: 2000,
  backOverlay: true,
  // plainText: false,
  clickToClose: true,
});

export class ImageGallery extends Component {
  state = {
    status: 'idle',
    galleryHits: [],
    totalHits: 0,
  };

  componentDidMount() {
    if (this.state.status === 'idle') {
      // console.log('render');
      return Notify.success('Please, fill your request!');
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log(this.props);

    const { currentPage, inputRequest } = this.props;

    if (prevProps.inputRequest === inputRequest) {
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
    // const { status } = this.state;
    const { status, galleryHits, totalHits } = this.state;
    const { currentPage, onLoadMore } = this.props;

    const remainedtotalHits = totalHits - currentPage * 12;

    // if (status === 'idle' && totalHits === 0) {
    //   console.log('render');
    //   return Notify.success('Please, fill your request!');
    // }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'failed') {
      return Notify.failure('Sorry, we found no images(');
    }

    if (status === 'resolved') {
      return (
        <ul>
          {galleryHits.map(hit => (
            <ImageGalleryItem
              key={hit.id}
              basicImage={hit.webformatURL}
              largeImage={hit.largeImageURL}
              tag={hit.tags}
            />
          ))}
          <ImageGalleryItem galleryHits={galleryHits} />
          {/* {remainedtotalHits > 0 && <LoadMoreButton onLoadMore={onLoadMore} />} */}
        </ul>
      );
    }
  }
}
