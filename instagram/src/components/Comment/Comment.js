import React from "react";
import PropTypes from "prop-types";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.username}</p>
      <p>{comment.text}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
