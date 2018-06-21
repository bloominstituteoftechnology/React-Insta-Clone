import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

const Comment = props => {
  return (
    <div className="comment">
      <span className="comment-username">{props.comment.username}</span>
      {props.comment.text}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
