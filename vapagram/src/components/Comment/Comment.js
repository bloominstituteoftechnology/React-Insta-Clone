import React from 'react';
// import PropTypes from 'prop-types';
import './Comment.css';
function Comment(props) {
  console.log(props.comment);
  return (
    <div className="Comment">
      <div className="username">{props.comment.username}</div>
      <div className="comment-text">{props.comment.text}</div>
    </div>
  );
}

export default Comment;
