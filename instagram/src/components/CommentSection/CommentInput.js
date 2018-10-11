import React from "react";
import styled from "styled-components";

const CommentForm = styled.form`
  border: 1px solid black;
`;

const CommentInputActual = styled.input`
  padding-bottom: 4%;
  type="text";
  placeholder="add comment.."
`;

const CommentInput = props => {
  return (
    <CommentForm onSubmit={props.submitComment}>
      <CommentInputActual
        value={props.comment}
        onChange={props.changeComment}
      />
    </CommentForm>
  );
};

export default CommentInput;
