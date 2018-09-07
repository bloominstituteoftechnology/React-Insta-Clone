import React from 'react';
import styled from 'styled-components'; 

const CommentForm = styled.form `
        border-top: 1px solid lightgray;
        width: 570px;
        margin-left: 10px;
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    `;

const CommentControl = styled.input `
        margin-top: 20px;
        width: 200px;
        height: 20px;
    `;

const CommentInput = props => {
    return (
        <CommentForm onSubmit={props.addNewComment} onChange={props.handleChange}>  
            <CommentControl type='text' placeholder='Add comment...' />
        </CommentForm>
    );
};

export default CommentInput;