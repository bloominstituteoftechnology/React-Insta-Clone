import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const Comment = ({ username, text }) => {
  // Deconstructing
  return (
    <div className="comments-wrapper">
      <span className="username">{username}</span>{" "}
      {/* Passing in the username abd text prop  */}
      <span className="comments-text">{text}</span>
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
