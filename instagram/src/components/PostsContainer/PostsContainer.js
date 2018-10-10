import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props => {

  if (!props.posts.length) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="posts-container-wrapper">
      {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
    </div>
  );
};

export default PostsContainer;