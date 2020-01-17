import React from "react";

import Post from "./Post";
import "./Posts.css";

const PostsPage = props => {
  console.log("the props", props);
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostsPage;
