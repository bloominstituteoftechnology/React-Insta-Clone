import React from "react";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

const CommentSection = ({ comments }) => {
  return (
    <section className="comments">
      {comments.map((comment, index) => (
        // Used index for key for now - Date.now() wasn't working for some reason:
        <Comment comment={comment} key={index} />
      ))}
    </section>
  );
};

// Since I check the array contents in Comment.js, no need to check here:
CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
