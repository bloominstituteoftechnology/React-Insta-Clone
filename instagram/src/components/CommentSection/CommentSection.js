import React from "react";
import CommentContent from "../CommentContent/CommentContent";

const CommentSection = ({ comments }) => {
  return (
    <div className="comment-container">
      {comments.map((item, i) => {
        return (
          <CommentContent
            key={i}
            username={comments[i].username}
            text={comments[i].text}
          />
        );
      })}
    </div>
  );
};

export default CommentSection;
