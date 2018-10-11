import React from 'react';
import styled from 'styled-components';


const AddCommentForm = styled.form`
    display: flex;  
    align-items: left;
    margin-left: 8px;
    margin-top: 6px;
    margin-bottom: 20px;
    `;

const AddCommentInput = styled.input`
    border: none;
`;
    

const CommentInput = props => {
    return (
        <AddCommentForm onSubmit={props.submitComment}>
        <AddCommentInput
          type="text"
          value={props.comment}
          placeholder="Add comment... "
          onChange={props.changeComment}
        />
      </AddCommentForm>
    );
}

export default CommentInput;