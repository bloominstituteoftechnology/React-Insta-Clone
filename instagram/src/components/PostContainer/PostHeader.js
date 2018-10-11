import React from 'react';

import { StyledPostHeaderContainer, StyledUsername } from './PostStyle';

import './PostContainerStyle/PostContainer.css';

const PostHeader = props => {
  return (
    <StyledPostHeaderContainer>
      <div className="post-thumbnail">
        <img
          src={props.thumbnailUrl}
          alt="post-header"
          className="post-thumb"
        />
      </div>
      <StyledUsername>{props.username}</StyledUsername>
    </StyledPostHeaderContainer>
  );
};

export default PostHeader;
