import React from 'react';
import styled from 'styled-components';

// ------------------- STYLED COMPONENTS ---------------

const CommentInputText = styled.input`
  width: 99.6%;
  height: 50px;
  font-size: 1rem;
  padding: 0 0%;
  margin-top: 11px;
`;

const AddCommentDiv = styled.div``;

// ------------------- STYLED COMPONENTS ---------------

const CommentInput = props => {
  return (
    <AddCommentDiv>
        <form onSubmit={props.addComment} onChange={props.handleTextInput}>
          <CommentInputText type='text' placeholder='Add a comment...' value={props.commentValue} name='comment'></CommentInputText>
          <input type='submit' value='Enter' />
        </form>        
      </AddCommentDiv>
  );
};

export default CommentInput;