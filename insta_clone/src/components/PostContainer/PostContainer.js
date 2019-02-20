import React from 'react';

import Post from '../Post/Post';

import './postcontainer.css';
import SearchBar from '../SearchBar/SearchBar';

function PostContainer({ search, posts }) {
  return (
    <div className=" postcontainer">
      {posts.map((post, index) => (
        <Post search={search} key={index} post={post} />
      ))}
    </div>
  );
}

export default PostContainer;
