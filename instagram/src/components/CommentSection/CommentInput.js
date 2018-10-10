import React from 'react';
import styled from 'styled-components';

const CommentAddingInput = styled.input `
    margin: 10px 0;
    height: 30px;
    border: none;
    width: 100%;
    max-width: 635px;
    font-size: 16px;
    border-top: 1px solid lightgray;
`

function CommentInput(props) {
    return (
        <form onSubmit={props.addNewComment}>
            <CommentAddingInput onChange={props.handleChange} name="commentInput" type="text" placeholder="Add a Comment..." value={props.commentInput}/>
        </form>
    )
}

export default CommentInput;
