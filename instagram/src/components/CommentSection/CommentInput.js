import React from 'react';
import styled from 'styled-components';

const CommentInputForm = styled.form`
    display: flex;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-bottom: 20px;
`;

const CommentIInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding-left: 2.5%;
    padding-bottom: 5px;
    padding-top: 5px;
`;

function CommentInput(props) {
    return (
        <CommentInputForm onSubmit={props.addNewComment} onChange={props.handleChanges}>
            <CommentIInput
              type = "text"
              name = "newComment"
              placeholder = "Add a comment..."
            />
        </CommentInputForm>
      );
}

export default CommentInput;