import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = (props) => {
  return (
    <div className="comment">
      <h4 className="username">{props.comment.username}: </h4>
      <p className="text">{props.comment.text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default Comment;