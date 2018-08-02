import React from 'react';
import Post from "./Post";
import './PostContainer.css';

const PostContainer = props => {
    return (
      <div className = "all-posts">
      {props.posts.map(post => <Post key = {post.username} post = {post} />)}
      </div>
    )
  }

export default PostContainer;
  