import React from 'react';
import styled from 'styled-components';

const Form = styled.form`

`;

const Input = styled.input`
  margin: 20px 5px; 
  width: 50%
`;

const CommentInput = props => {
  return (
    <Form 
      onSubmit={e => {
        props.addNewComment(e);
        }}
      onChange={props.handleChange}
    >
      <Input name="inputText" value={props.inputText} type="text" placeholder="Add comment... " />
    </Form>
  );
};

export default CommentInput;