import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="Comment-section">
      <div className="Comment-nickname">{props.comment.nickname}:</div>
      <div className="Comment-text">{props.comment.text}</div>{" "}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
