import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} likes={props.posts.likes} />)}
    </div>
  );
};

export default PostsContainer;
