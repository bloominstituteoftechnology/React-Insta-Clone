import React from 'react';
import PostImage from './PostImage.js'
import UserName from './UserName.js'

const PostContent= props => {
  return [
    <div>
        <PostImage></PostImage>
        <UserName></UserName>
    </div>
  ];
};

export default PostContent;
