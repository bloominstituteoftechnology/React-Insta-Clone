import React from "react";
import "./PostContainer.css";
import Post from './Post';

const PostContainer = props => {
  return (
          <div className="post-container">
          {props.post.map(post => <Post key={post.imageUrl} post={post} /> )}
    </div>
  );
};

export default PostContainer;
