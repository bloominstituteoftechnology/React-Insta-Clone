import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const CommentSection = props => {
  return (
    <div className="comment-container">
      <span className="comm-user"> {props.comm.username} </span>
      <span className="comm-text"> {props.comm.text} </span>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
