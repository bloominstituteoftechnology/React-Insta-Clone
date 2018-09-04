import React from 'react';
import Post from '../Post/Post';
import './PostContainer.css';
function PostContainer(props) {
  return (
    <div className="PostContainer">
      {props.posts.map(post => (
        <Post post={post} key={post.username + post.timestamp} />
      ))}
    </div>
  );
}
export default PostContainer;
