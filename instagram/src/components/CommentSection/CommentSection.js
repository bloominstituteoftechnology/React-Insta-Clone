import React from "react";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";
import moment from "moment";

const CommentSection = ({ comments, timestamp }) => {
  return (
    <section className="comments">
      {comments.map((comment, index) => (
        // Used index for key for now - Date.now() wasn't working for some reason:
        <Comment comment={comment} key={index} />
      ))}
      <h5 className="timestamp">
        {moment.duration(Date.now() - timestamp).humanize()}
      </h5>
      <input
        type="text"
        placeholder="Add a comment..."
        className="comment-input"
      />
    </section>
  );
};

// Since I check the array contents in Comment.js, no need to check here:
CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
