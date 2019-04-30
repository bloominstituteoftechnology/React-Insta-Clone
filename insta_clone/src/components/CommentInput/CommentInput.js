import React from 'react';
import styled from 'styled-components';

function CommentInput({ value, handleInput, handleAddComment }) {
  return (
    <form onSubmit={handleAddComment}>
      <Input
        onChange={handleInput}
        placeholder="Add a comment"
        type="text"
        value={value}
      />
      <I className="fas fa-ellipsis-h" />
    </form>
  );
}

const Input = styled.input`
  border-style: none;
  padding: 20px;
  font-size: 20px;
`;

const I = styled.i`
  float: right;
  margin: 25px 0;
  margin-right: 10px;
`;

export default CommentInput;
