import React from 'react';
import styled from 'styled-components';

const CommentInput = styled.input`
    text-align: left;
    border-top: 1px solid lightgray;
    border-bottom: none;
    border-left: none;
    border-right: none;
    font-size: 18px;
    margin-top: 10px;
    margin-right: 10%;
    padding-top: 25px;
    width: 90%;
`;

const CommentBar=(props)=> {
    return(
        <div>
        <form onSubmit={props.submitComment}>
            <CommentInput type='text' placeholder='Add a comment' onChange={props.writeComment}/>
        </form>
        </div>
    );
};

export default CommentBar;