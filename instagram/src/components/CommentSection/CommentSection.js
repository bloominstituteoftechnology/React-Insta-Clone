import React from "react";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";
import moment from "moment";

const CommentSection = ({
  comments,
  timestamp,
  newCommentText,
  changeHandler,
  addNewComment
}) => {
  return (
    <section className="comments">
      {comments.map((comment, index) => (
        // Used index for key for now - Date.now() wasn't working for some reason:
        <Comment comment={comment} key={index} />
      ))}
      <h5 className="timestamp">
        {moment.duration(Date.now() - timestamp).humanize()} ago
      </h5>
      <form onSubmit={e => addNewComment(e, timestamp)}>
        <input
          name="newCommentText"
          value={newCommentText}
          type="text"
          placeholder="Add a comment..."
          onChange={changeHandler}
          className="comment-input"
        />
      </form>
    </section>
  );
};

// Since I check the array contents in Comment.js, no need to check here:
CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
