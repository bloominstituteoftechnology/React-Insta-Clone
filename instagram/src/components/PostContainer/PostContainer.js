import React from 'react';
import Post from './Post';

import { StyledPostContainer } from './PostStyle';

const PostContainer = props => {
  return (
    <StyledPostContainer>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </StyledPostContainer>
  );
};

export default PostContainer;
