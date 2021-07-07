import React from 'react';
import styled from 'styled-components';
import sprite from '../SearchBar/imgs/download.png';


const CommentInputField = styled.input`
  margin-top: 2%;
  width: 95%;
  height: 40px;
  border: none;
  border-top: 1px solid lightgray;
  outline-style:none;
  box-shadow:none;
`;

const CommentInputForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const CommentInput = props => {
  return (
    <CommentInputForm onSubmit={props.addNewComment}>
      <CommentInputField value = {props.inputText} placeholder="Add comment... " onChange = {props.handleInput} />
      <div className='options'></div>
    </CommentInputForm>
  );
};

export default CommentInput;