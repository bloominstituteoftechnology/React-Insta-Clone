import React from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
    margin-left: 5%;
    width: 90%;
    background-color: #E6E6E6;
    border: 0;
    height: 1px;
`

const AddCommentInput = styled.input`
    width: 95%;
    margin-left: 2.5%;
    border: none;
    height: 50px;
    font-size: 16px;
    padding-left: 5px;
    color: ##B5B5B5;
`

const AddComment = props => {
    return(
        <form onSubmit={props.submitComment}>
        <Hr />
            <AddCommentInput type="text" placeholder="Add comment..." value={props.comment} onChange={props.commentHandler}/>
        </form>
    )
}

export default AddComment;