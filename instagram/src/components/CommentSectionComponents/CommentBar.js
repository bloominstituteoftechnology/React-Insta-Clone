import React from 'react';
import styled from 'styled-components';

const CommentInput = styled.input`
    height: 30px;
    text-align: left;
    border: none;
    font-size: 16px;
    margin-top: 10px;
    margin-left: 0%;
    width: 99%;
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