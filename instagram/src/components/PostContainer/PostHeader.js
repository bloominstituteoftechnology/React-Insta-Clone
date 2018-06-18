import React from 'react';
import './PostContainer.css';
import PostHeaderThumbnail from './PostHeaderThumbnail';
import PostHeaderUsername from './PostHeaderUsername';

const PostHeader = (props) => {
  return(
    <div className="post-header">
      <PostHeaderThumbnail thumbnail={props.thumbnail} />
      <PostHeaderUsername username={props.username} />
    </div>
  );
};

export default PostHeader;