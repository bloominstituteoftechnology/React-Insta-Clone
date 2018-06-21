import React from 'react';
import styled, { css } from 'styled-components';
import sprites from'../instagram-sprites.png';

const PostActionsDiv = styled.div`
  margin: 0 0 10px 0;
  padding: 0 15px;
`;

const PostActionsAnchor = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(${sprites});
  background-size: 495px 483px;
  color: rgba(0,0,0,0);
  pointer-events: auto;
  cursor: pointer;

  ${props => props.like && css`
    background-position: -75px -425px;
    margin: 0 15px 0 0;
  `}

  ${props => props.comment && css`
    background-position: -401px -399px;
  `}

`;

const PostActions = (props) => {
  return(
    <PostActionsDiv>
      <PostActionsAnchor like href="like" onClick={e => props.addLike(e, props.postIndex)}>Like</PostActionsAnchor>
      <PostActionsAnchor comment href="comment">Comment</PostActionsAnchor>
    </PostActionsDiv>
  );
};

export default PostActions;