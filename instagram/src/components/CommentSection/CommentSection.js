import React from "react";
// import PostContainer from "./src/components/PostContainer/PostContainer";

const CommentSection = props => {
  console.log(props.commentList);
  return (
    <div>
      {props.commentList.map(comments => (
        <div>
          <div>{comments.username}</div>
          <div>{comments.text}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
