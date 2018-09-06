import React from 'react';
import './Posts.css';
import styled, { css } from 'styled-components';

const PostHeaderDiv = styled.div`
  display: flex;
  padding: 10px;
`;

const PostThumbWrapper = styled.div`
  height: 30px;
  width: 30px;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 0.8em;
  padding: 0 5px;
  ${props =>
    props.bold &&
    css`
      font-weight: 600;
      font-size: 0.9em;
      padding: 5px;
    `};
`;

const PostHeader = props => {
  return (
    <PostHeaderDiv>
      <PostThumbWrapper>
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <UserName bold>{props.username}</UserName>
    </PostHeaderDiv>
  );
};

export default PostHeader;