import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="post-wrapper">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostContainer;

//iterate over list of posts and give me a new array of posts components
