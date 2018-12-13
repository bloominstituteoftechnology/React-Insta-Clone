import React from 'react';
import styled from 'styled-components';

// ------------------- STYLED COMPONENTS ---------------

const SingleCommentDiv = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`;

const UserComment = styled.h4`
  padding-right: 10px;
  margin: 0;
`;

const UserCommentText = styled.p``;

// ------------------- STYLED COMPONENTS ---------------

function Comment(props) {
  return (
    <SingleCommentDiv>
      <UserComment>{props.profileObject.username}</UserComment>
      <UserCommentText>{props.profileObject.text}</UserCommentText>
    </SingleCommentDiv>
  );
}

export default Comment;