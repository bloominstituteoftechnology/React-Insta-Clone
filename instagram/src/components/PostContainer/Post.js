import React from 'react';

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

export default Post;