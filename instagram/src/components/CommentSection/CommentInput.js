import React, { Component } from 'react';
import styled from "styled-components";

const FormComment = styled.form
  ` margin-left: 0.7rem;
    margin-right: 0.6rem;
    margin-top: 0.4rem;

    input{
      width: 100%;
      height: 2.5rem;
      border-top: 0.5px solid lightgrey;
      border-left: transparent;
      border-right: transparent;
      border-bottom: transparent;
    } `;

const CommentInput = props => {
  return(
    <FormComment onSubmit={props.submit}>
      <input
        type='text'
        placeholder='Add comment ... '
        value={props.comment}
        onChange={props.change}
      />
    </FormComment>
  )
}

export default CommentInput;
