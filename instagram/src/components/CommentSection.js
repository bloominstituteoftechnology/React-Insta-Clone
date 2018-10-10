import React from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(commentObj => {
        return (
          <div>
            <Comment comment={commentObj} />
          </div>
        );
      })}
      <input
        type="text"
        name="new comment"
        placeholder="enter new comment..."
      />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      comment: PropTypes.string
    })
  )
};

export default CommentSection;
