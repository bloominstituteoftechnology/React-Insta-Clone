import React from 'react';
import PostImage from './PostImage.js'
import UserName from './UserName.js'

const PostContent= props => {
  return (
    <div id='postContent'>
        <PostImage></PostImage>
        <UserName></UserName>
    </div>
  );
};

export default PostContent;
