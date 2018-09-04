import React from "react";
import './CommentSection.css';
import styled from 'styled-components';

const CommentInputArea = styled.input`
outline: none;
border: hidden;
margin: 10px 0 0 -20px;
`;


const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment} >
      <CommentInputArea
        onChange={props.changeComment}
        value={props.comment}
        type="text"
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
