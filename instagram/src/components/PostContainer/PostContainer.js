import React from 'react';
import Post from '../Post/Post';
import './PostContainer.css';

const PostContainer = (props) => {
  return (
    <div className="PostContainer">
      {props.posts.map(post =>
        <Post key={post.username + ': ' + post.timestamp}
              post={post} />
      )}
    </div>
  );
}

export default PostContainer;