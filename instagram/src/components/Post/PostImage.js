import React from 'react';
import PropTypes from 'prop-types';
import { PImg } from './../Styled/styled';

class PostImage extends React.Component {
  render() {
    return <PImg src={this.props.image} />;
  }
}

PostImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default PostImage;
