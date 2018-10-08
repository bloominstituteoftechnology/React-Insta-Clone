import React from 'react';

import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostContainer;
