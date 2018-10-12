import React from "react";
import Post from "./Post";
//import "./Posts.css";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostContainer;
