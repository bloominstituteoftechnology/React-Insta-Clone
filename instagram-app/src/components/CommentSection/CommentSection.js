import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-container">
      <p>
        <strong className="comment-username">{props.comments.username}</strong>
        <span>{props.comments.text}</span>
      </p>
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default CommentSection;