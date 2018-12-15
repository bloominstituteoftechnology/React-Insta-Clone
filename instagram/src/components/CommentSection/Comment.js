import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
    <div  className="comments-comment">
      <div className="comments-username">{props.comment.username}</div>
      <div className="comments-text">{props.comment.text}</div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}
export default Comment;