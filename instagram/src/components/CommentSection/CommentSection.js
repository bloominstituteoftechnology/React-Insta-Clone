import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.post.comments.map(comment => (
        <Comment comment={comment} key={Math.random()} />
      ))}
    </div>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.object
};

export default CommentSection;
