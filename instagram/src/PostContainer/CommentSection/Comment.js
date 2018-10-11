import React, { Component } from "react";
import styled from "styled-components";
const CommentSection = styled.div`
  padding-left: 4%;
  margin-bottom: 5px;
`;
const Username =styled.span `
    font-weight: bold;
`;
const Comment = prop => {
  return prop.comments.map(comment => {
    return (
      <CommentSection>
        <Username>{comment.username}</Username> {comment.text}
      </CommentSection>
    );
  });
};
export default Comment;
