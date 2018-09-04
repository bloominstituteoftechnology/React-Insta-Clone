import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
