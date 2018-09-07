import React from 'react';
import styled from 'styled-components';

function AddComment(props) {
  return (
    <Form onSubmit={props.addNewComment}>
      <Input
        value={props.commentInput}
        onChange={props.handleChange}
        placeholder="Add a comment..."
        name="commentInput"
      />
    </Form>
  );
}

export default AddComment;

const Input = styled.input`
  border-style: none;
  width: 95%;
  height: 50px;
  border-top: 1px solid lightgray;
  font-size: 1rem;
  margin-top: 10px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;
