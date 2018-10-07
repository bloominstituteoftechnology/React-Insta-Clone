import React from 'react';
import PropTypes from 'prop-types';

const PostImage = props => <img src={props.image} alt="Post" className="post-image" />

PostImage.propTypes = {
    image: PropTypes.string.isRequired
}

export default PostImage