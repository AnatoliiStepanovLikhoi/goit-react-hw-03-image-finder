import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGalleryList = ({ galleryHits }) => (
  <ul className={styles.imageGallery}>
    {galleryHits.map(hit => (
      <ImageGalleryItem
        key={hit.id}
        basicImage={hit.webformatURL}
        largeImage={hit.largeImageURL}
        tag={hit.tags}
      />
    ))}
  </ul>
);

ImageGalleryList.propTypes = {
  galleryHits: PropTypes.array.isRequired,
};
