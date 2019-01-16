import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const PostHeartsCount = props => {
  return (
    <span className="post-heart-count">{props.likes.length} likes</span>
  );
};

PostHeartsCount.propTypes = {
  likes: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
};

export default PostHeartsCount;