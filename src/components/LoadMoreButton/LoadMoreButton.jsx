import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';

import styles from './LoadMoreButton.module.css';

export const LoadMoreButton = ({ onLoadMore, status }) => (
  <div className={styles.buttonContainer}>
    {status === 'pending' ? (
      <Loader />
    ) : (
      <button onClick={onLoadMore} className={styles.buttonItem}>
        Load More
      </button>
    )}
  </div>
);

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};
