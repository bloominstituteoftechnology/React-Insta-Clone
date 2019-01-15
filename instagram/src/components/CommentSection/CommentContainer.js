import React from "react";
import Comment from "./Comment";

const CommentContainer = props => {
  return (
    <div className="comment-wrapper">
      {props.data.comments.map(comment => (
        <Comment username={comment.username} text={comment.text} />
      ))}
    </div>
  );
};

export default CommentContainer;
