import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="Comment">
      <a href="/" className="username">
        {props.comment.username}
      </a>
      <span className="comment-text">{props.comment.text}</span>
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
