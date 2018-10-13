import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 2px;
  margin-top: 0px;
  padding: 0px;
`;

const User = styled.p`
  font-weight: bold;
  margin-right: 5px;
`;

const Comment = props => {
  return (
    <CommentContainer>
      <User>{props.commentUser}</User>
      <p>{props.comment}</p>
    </CommentContainer>
  );
};

export default Comment;
