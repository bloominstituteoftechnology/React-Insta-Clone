import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    margin: 0 15px;
    border: none;
    height: 55px;
    width: 91%;
    outline: none;
    font-size: 14.7px;
`;

const Icon = styled.i`
    position: absolute;
    font-size: 14px;
    right: 15px;
    padding-top: 22.5px;
`;

let CommentForm = props => {
    return(
        <form onSubmit={props.addNewComment} autoComplete="off">
            <Icon className="fas fa-ellipsis-h"/>
            <Input type='text' name="newComment" placeholder="Add a comment..." value={props.value} onChange={props.changeHandler} />
        </form>
    )
}

export default CommentForm;