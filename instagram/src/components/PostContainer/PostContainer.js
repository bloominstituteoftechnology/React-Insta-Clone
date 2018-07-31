import React from "react";
import "./PostContainer.css";
import Post from "./Post";
import PropTypes from "prop-types";

// {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostContainer;
