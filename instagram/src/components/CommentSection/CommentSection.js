import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => (
        <div className="comment-container">
          <h1 className="username">{comment.username}</h1>
          <p className="text">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
