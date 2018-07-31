import React from "react";
import Post from "./Post";
import './PostContainer.css';

const PostsContainer = props => {
  return (
    <div className="post-container">
      {props.dataSet.map(p => <Post key={p.imageUrl} newPost={p} increment={props.incrementLikes} />)}
    </div>
  );
};

export default PostsContainer;