import React from "react";
import Post from "./Post";
import "./Post.css";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post key={post.imageUrl} post={post} likes={post.likes} />
      ))}
    </div>
  );
};

export default PostContainer;