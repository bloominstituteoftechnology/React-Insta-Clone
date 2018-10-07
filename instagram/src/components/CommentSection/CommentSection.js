import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = (props) => {
  return (
    <div>
      <p className='comments'><span>{props.comments.username}</span> {props.comments.text}</p>
    </div>
  );
};


CommentSection.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default CommentSection;
