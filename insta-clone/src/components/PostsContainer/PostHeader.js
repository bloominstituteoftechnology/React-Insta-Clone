import React from 'react';
import styled from 'styled-components';

const PostsHeader = styled.div `
  display: flex;
`

const PostThumbWrapper = styled.div `
  height: 50px;
  width: 50px;
`

const PostThumb = styled.img `
  height: 100%;
  border-radius: 50%;
`

const PostHeader = props => {
  return (
    <PostsHeader>
      <PostThumbWrapper>
        <PostThumb alt="post header" src={props.thumbnailUrl}/>
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostsHeader>
  );
};

export default PostHeader;
