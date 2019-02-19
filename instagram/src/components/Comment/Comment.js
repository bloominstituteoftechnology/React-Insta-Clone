import React from "react";
import PropTypes from "prop-types";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h3 className="username">{comment.username}</h3>
      <p>{comment.text}</p>
    </div>
  );
};

// Checks each comment object's contents:
Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
