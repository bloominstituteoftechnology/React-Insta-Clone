import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment">
      <p>{props.comment.username}</p>
      <p>{props.comment.text}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
