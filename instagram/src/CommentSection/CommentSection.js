import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <React.Fragment>
      {props.comments.map((each, i) => {
        return (
          <div key={i} className="post-comments">
            <strong>{each.username}</strong> <span>{each.text}</span>
          </div>
        );
      })}
    </React.Fragment>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default CommentSection;
