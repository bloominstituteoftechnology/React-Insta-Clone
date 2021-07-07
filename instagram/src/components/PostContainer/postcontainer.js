import React from "react";
import Post from "./post";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div>
      {props.userData.map(posts => (
        <Post key={posts.imgUrl} post={posts} />
      ))}
    </div>
  );
};

export default PostContainer;
