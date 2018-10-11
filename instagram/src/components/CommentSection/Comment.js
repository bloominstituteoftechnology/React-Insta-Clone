import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

const Comment = props => {
  // let dateString = moment(date)
  //   .startOf("hour")
  //   .fromNow();
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>{" "}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

Comment.propType = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
