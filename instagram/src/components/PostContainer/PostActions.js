import React from 'react';
import './PostContainer.css';
import PostActionsLikeButton from './PostActionsLikeButton';
import PostActionsCommentButton from './PostActionsCommentButton';

const PostActions = (props) => {
  return(
    <div className="post-actions">
      <PostActionsLikeButton addLike={props.addLike} postIndex={props.postIndex} />
      <PostActionsCommentButton />
    </div>
  );
};

export default PostActions;