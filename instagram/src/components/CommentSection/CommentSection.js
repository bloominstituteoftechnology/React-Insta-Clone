import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
