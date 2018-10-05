import React from 'react';
import PropTypes from 'prop-types';

class PostImage extends React.Component {
  render() {
    return <img className="postImage" src={this.props.image} />;
  }
}

PostImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default PostImage;
