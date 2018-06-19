import React from 'react';
import './PostContainer.css';

const PostActionsLikeButton = (props) => {
  return(
    <a className="post-actions__like-button" href="like" onClick={e => props.addLike(e, props.postIndex)}>Like</a>
  );
};

export default PostActionsLikeButton;