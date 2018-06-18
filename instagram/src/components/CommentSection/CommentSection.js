import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div>
      {/* COMMENTS SECTION */}
      <Comment text={props.text} username={props.username} />
    </div>
  );
};

export default CommentSection;
