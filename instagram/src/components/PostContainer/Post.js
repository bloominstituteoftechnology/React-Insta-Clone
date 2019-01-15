import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';

function Post(props) {

  return (
    <div className="post">
      {props.postUsername}
      {props.postThumbnailUrl}
      {props.postImageUrl}
      {props.postLikes}
      {props.postTimestamp}
    </div>
  );
}

Post.propTypes = {
  postUsername: PropTypes.string,
  postThumbnailUrl: PropTypes.string,
  postImageUrl: PropTypes.string,
  postLikes: PropTypes.number,
  postTimestamp: PropTypes.string
}

export default Post;