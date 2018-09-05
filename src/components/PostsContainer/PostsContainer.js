import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts
        .filter(post => {
          return post.username.includes(props.searchTerm);
        })
        .map(p => (
          <Post key={p.imageUrl} post={p} />
        ))}
    </div>
  );
};

export default PostsContainer;
