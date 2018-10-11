import React from "react";

// import "./CommentSection.css";
import { CommentWrapper, UserNameComment } from "./CommentStyles.js";

const Comments = props => {
  return (
    <CommentWrapper>
      <UserNameComment>{props.comments.username} </UserNameComment>
      <p className="postcomment">{props.comments.text}</p>
    </CommentWrapper>
  );
};

export default Comments;
