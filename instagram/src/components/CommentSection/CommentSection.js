import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(elementItem => (
        <Comment
          key={elementItem.id}
          username={elementItem.username}
          text={elementItem.text}
        />
      ))}
    </div>
  );
};

export default CommentSection;
