import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';


export default class PostImage extends React.Component {

  render () {
    return (
      <div className = 'postIMG'>
        <img className = 'actualPostIMG' src = {this.props.image} />
      </div>

    )
  }
}

PostImage.propTypes = {
  image: PropTypes.string.isRequired
};
