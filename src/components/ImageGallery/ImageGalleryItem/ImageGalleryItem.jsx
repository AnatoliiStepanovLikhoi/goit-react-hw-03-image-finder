// import PropTypes from 'prop-types';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  // state = {
  //   showModal: false,
  // };

  render() {
    return (
      <li>
        <img src={this.props.basicImage} alt={this.props.tag} />
      </li>
    );
  }
}
