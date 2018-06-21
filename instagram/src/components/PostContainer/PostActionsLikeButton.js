import React from 'react';

const PostActionsLikeButton = (props) => {
  return(
    <a className="post-actions__like-button" href="like" onClick={e => props.addLike(e, props.postIndex)}>Like</a>
  );
};

export default PostActionsLikeButton;