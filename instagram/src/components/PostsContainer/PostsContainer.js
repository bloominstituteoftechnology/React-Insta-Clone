import React from 'react';
import Posts from './Posts';
import './Posts.css';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Posts key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostsContainer;