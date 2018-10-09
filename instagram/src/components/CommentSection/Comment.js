import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const Comment = props => {
  return (
    <div className="commentText">
      <span className="comment">{props.comment.text}</span>{" "}
      <span className="user">{props.comment.username}</span>
    </div>
  );
};

Comment.protoTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
