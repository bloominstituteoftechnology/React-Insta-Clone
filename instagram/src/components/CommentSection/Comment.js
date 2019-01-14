import React from 'react';
import './CommentSection.css';

function Comment(props) {

  return (
    <div className="comment">
      USER: {props.commentData.username}
      COMMENT: {props.commentData.text}
    </div>
  );
}

export default Comment;