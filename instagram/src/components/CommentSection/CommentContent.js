import React from "react";
import PropTypes from "prop-types";
import "./CommentContent.css";

const CommentContent = props => {
    return (
        <div className="comment-content">
            <p>{props.comment.username}</p>
            <p>{props.comment.text}</p>
        </div>
    );
}

CommentContent.propTypes = {
    comment: PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  };

export default CommentContent;