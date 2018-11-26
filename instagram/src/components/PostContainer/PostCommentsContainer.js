import React from 'react';
import Comment from './Comment';
import CommentFooter from './CommentFooter';

function PostCommentsContainer(props) {
  return (
    <div className="post-comments-container">
    	{props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
    </div>
  );
}

export default PostCommentsContainer;