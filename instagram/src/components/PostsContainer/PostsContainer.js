import React from "react";
import Post from "./Post";

import "./PostsContainer.css";

// this container is passing props from app.js and mapping the date into {post}
const PostsContainer = props => {
  return (
    <div className="post-box-wrapper">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostsContainer;
