import React from 'react';

import Posthead from './Posthead';



const Post = props => {
  return (
    <div className="post-border">
      <Posthead
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      
    </div>
  );
};

export default Post;