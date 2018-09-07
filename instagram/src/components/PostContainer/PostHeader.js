import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;  
`

const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`

const PostThumbImg = styled.img`
  height: 100%;
  border-radius: 50%;
`

const PostHeader = props => {
  return (
    <Header>
      <PostThumbWrapper>
        <PostThumbImg
          alt="post header"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
      </Header>
  );
};

export default PostHeader;