import React from 'react';

import styled from 'styled-components';
import Username from '../../Styles/Reusables';

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
// const Username = styled.div`
//   font-weight: 500;
//   font-size: 14px;
// `

const PostHeader = props => {
  return (
    <Header>
      <PostThumbWrapper>
        <PostThumbImg
          alt="post header"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <Username>{props.username}</Username>
      </Header>
  );
};

export default PostHeader;