import React, { Component } from "react";
import styled from "styled-components";
const NewCommentDiv = styled.div`
    border:none;
    width:100%;
    margin-left:4%;
    margin-right:4%;
    border-top:1px solid #E6E6E6
    margin-bottom: 10px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;
const NewComment = prop => {
  return (
    <NewCommentDiv className="new-comment">
      <form type="submit" onSubmit={prop.addComment}>
        <Input
          onChange={prop.changeComment}
          type="text"
          placeholder="add a comment"
        />
      </form>
    </NewCommentDiv>
  );
};
export default NewComment;
