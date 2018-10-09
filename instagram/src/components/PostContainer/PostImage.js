import React from 'react';
import PropTypes from 'prop-types';

import '../PostContainer/PostContainer.css';

const PostImage = props => {
    return (
        <img src={props.image} className="post-image" alt="post image" />
    );
}

PostImage.propTypes = {
    image: PropTypes.string
}

export default PostImage;
