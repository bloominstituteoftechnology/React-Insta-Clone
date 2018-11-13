import React from "react";
import CommentSection from "../CommentSection/Comments";
import "./Post.css";

const PostContainer = props => {
  return (
    <div className="post-wrapper">
      {props.data.map(post => (
        <div>
          <img src={post.thumbnailUrl} alt="user" />
          <p>{post.username}</p>
          <img src={post.imageUrl} alt="post" />
        </div>
      ))}
      <CommentSection />
    </div>
  );
};

export default PostContainer;
