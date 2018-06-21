import React from 'react';
import PostHeaderThumbnail from './PostHeaderThumbnail';
import UsernameSpan from '../Styles/Reusables/UsernameSpan';
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
      <UsernameSpan>{props.username}</UsernameSpan>
    </PostHeaderDiv>
  );
};

export default PostHeader;