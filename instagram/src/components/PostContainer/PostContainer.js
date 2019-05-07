import React from 'react';
import Post from './Post';

import './PostContainer.css';

const STYLE_BASE = "posts-section_";

const PostsContainer = props => {
  return (
    <div className={`${STYLE_BASE}wrapper`}>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostsContainer;