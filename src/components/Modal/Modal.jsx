import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const portal = document.querySelector('#portal');

export class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('натиснули esc');
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    // console.log(event.target);
    // console.log(event.currentTarget);

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    console.log('modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { largeImage, tag } = this.props;

    return createPortal(
      <div
        className={styles.Modal__backdrop}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal__content}>
          <img src={largeImage} alt={tag} />
        </div>
      </div>,
      portal
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
