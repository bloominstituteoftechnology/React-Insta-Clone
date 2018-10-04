import React from 'react';

const CommentLikes = props => {
  return (
    <>
      <span className="post-comment-likes">{props.likes+ ' likes'}</span> 
    </>
  );
}

export default CommentLikes;
