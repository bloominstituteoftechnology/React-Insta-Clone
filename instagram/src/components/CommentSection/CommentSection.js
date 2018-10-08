import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.user.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
      <p className="timestamp">{props.user.timestamp}</p>
      <hr className="break" />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
