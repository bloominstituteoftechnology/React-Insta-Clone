import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const PostHeartsCount = props => {
  return (
    <span className="post-heart-count">{props.hearts.length} likes</span>
  );
};

PostHeartsCount.propTypes = {
  hearts: PropTypes.arrayOf(PropTypes.string),
};

export default PostHeartsCount;