import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentContainer = props => {
  return (
    <div className="comment-wrapper">
      {props.data.comments.map(comment => (
        <Comment
          key={comment.username}
          username={comment.username}
          text={comment.text}
        />
      ))}
      <AddComment
        addComment={props.addComment}
        inputText={props.inputText}
        handleChange={props.handleChange}
        data={props.data}
        username={props.username}
      />
    </div>
  );
};

export default CommentContainer;
