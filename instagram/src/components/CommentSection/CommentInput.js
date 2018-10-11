import React from "react";
import styled from "styled-components";

const CommentForm = styled.form`
  border-top: 1px solid black;
`;

const CommentInputActual = styled.input`
  padding-bottom: 4%;
`;

const CommentInput = props => {
  return (
    <CommentForm onSubmit={props.submitComment}>
      <CommentInputActual
        type="text"
        placeholder="add comment.."
        value={props.comment}
        onChange={props.changeComment}
      />
    </CommentForm>
  );
};

export default CommentInput;
