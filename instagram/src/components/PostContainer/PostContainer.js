import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

function PostContainer(props) {

  return (
    <div className="post-container">
    POST:
      {props.post.username}
    COMMENT SECTION:
      <CommentSection commentData={props.post.comments} />
    </div>
  );
}


export default PostContainer;