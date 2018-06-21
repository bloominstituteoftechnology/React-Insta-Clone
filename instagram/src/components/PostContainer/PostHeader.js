import React from 'react';
import PostHeaderThumbnail from './PostHeaderThumbnail';
import PostHeaderUsername from './PostHeaderUsername';
import styled from 'styled-components';

const PostHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const PostHeader = (props) => {
  return(
    <PostHeaderDiv>
      <PostHeaderThumbnail thumbnail={props.thumbnail} />
      <PostHeaderUsername username={props.username} />
    </PostHeaderDiv>
  );
};

export default PostHeader;