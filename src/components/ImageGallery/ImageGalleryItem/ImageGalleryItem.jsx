import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <li className={styles.imageGalleryItem}>
        <img
          src={this.props.basicImage}
          alt={this.props.tag}
          className={styles.imageGalleryImage}
          onClick={this.toggleModal}
        />

        {showModal ? (
          <Modal
            largeImage={this.props.largeImage}
            tag={this.props.tag}
            onClose={this.toggleModal}
          />
        ) : null}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  basicImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
