import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const PostImage = props => {
  return (
    <div className="post-image">
      <img src={props.postImage} alt="" />
    </div>
  );
};

PostImage.propTypes = {
  postImage: PropTypes.string.isRequired
};

export default PostImage;