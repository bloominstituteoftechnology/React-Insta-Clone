import React from 'react';
import styled from 'styled-components';

function Comment(props) {
  // console.log(props);
  return (
    <CommentContainer>
      <Username>{props.comment.username}</Username>
      <Content>{props.comment.text}</Content>
    </CommentContainer>
  );
}

export default Comment;

const CommentContainer = styled.div`
  width: 95%;
  margin: 5px 0;
  display: flex;
  align-items: baseline;
`;

const Username = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

const Content = styled.p`
  font-size: 1rem;
  margin-left: 10px;
`;
