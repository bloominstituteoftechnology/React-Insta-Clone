import React from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div`
  display: flex;
  margin-left: 20px;
`
const UserName = styled.div`
  font-weight: bold;
  padding-right: 5px;
`

const Comment = props => {
  return (
    <CommentDiv>
      <UserName>{props.comment.username}</UserName>
      <div>{props.comment.text}</div>
    </CommentDiv>
  );
};

export default Comment;
