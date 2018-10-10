import React from "react";
import PropTypes from "prop-types";
import "./CommentContent.css";

const CommentContent = props => {
    return (
        props.comments.map(comment => {
            return (
                <div className="comment-content" key={Math.random()}>
                    <p>{comment.username}</p>
                    <p>{comment.text}</p>
                </div>
            );
        })
        
    );
}

CommentContent.propTypes = {
    comment: PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  };

export default CommentContent;