import React from "react";
import Post from "./Post";
import "./Post.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.post.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostContainer;
