import React from "react";
import Post from ".Posts";
import "./PostContainerStyle.css";

const PostsContainer = props => {
  return (
    <div className="PostsContainerContainer">
      {props.posts.map(post => (
        <Post key={post.imageUrl} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
