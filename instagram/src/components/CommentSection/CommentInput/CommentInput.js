import React from 'react';
import './CommentInput.css';
import styled from 'styled-components';

const Input = styled.input`
    font-size: 12px;
    line-height: 45px;
    border: none;
    border-top: 1px solid lightgrey;
    margin-top: 5px;
    width: 100%;
`;

const CommentInput = props => {
    return (
        <form onSubmit={props.addNewComment} >
            <Input
                className="comment-input" 
                type="text" 
                name="inputText"
                placeholder="Add a comment..."
                value={props.inputText}
                onChange={props.commentHandler}
            />
        </form>
    )
}

export default CommentInput;