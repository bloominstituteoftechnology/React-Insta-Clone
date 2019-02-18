import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = ({ post }) => {
  return (
    <section className="post">
      <img src={post.imageUrl} alt={post.imageUrl} />
      <CommentSection comments={post.comments} className="comment-section" />
    </section>
  );
};

export default PostContainer;
