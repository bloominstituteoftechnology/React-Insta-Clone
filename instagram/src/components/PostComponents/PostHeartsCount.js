import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const PostHeartsCount = props => {
  return (
    <span className="post-heart-count">{props.hearts} likes</span>
  );
};

PostHeartsCount.propTypes = {
  hearts: PropTypes.number.isRequired
};

export default PostHeartsCount;