import React from 'react';

import './PostContainer.css';

function PostContainer(props) {

  return (
    <div className="post-container">
    here is a post:
      {props.post.username}
    </div>
  );
}


export default PostContainer;