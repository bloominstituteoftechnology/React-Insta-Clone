import React from "react";
import PropTypes from "prop-types";

const CommentSection = ({ comments }) => {
  return (
    <section className="comments">
      {comments.map((comment, index) => (
        // Used index for key for now - Date.now() wasn't working for some reason:
        <div key={index} className="comment">
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CommentSection;
