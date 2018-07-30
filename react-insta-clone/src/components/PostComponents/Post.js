import React from "react";
import CommentSection from "../CommentComponents/CommentSection";

const Post = props => {
  return (
    <div>
      {props.post.username}
      <CommentSection />
    </div>
  );
};

export default Post;