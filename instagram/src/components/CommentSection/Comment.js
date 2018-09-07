import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
    display: flex;
    margin: 10px 2.5%;
`;

const CommentH4 = styled.div`
    display: flex;
    margin-right: 2.5%;
    font-weight: bold;
`;

const CommentP = styled.div`
    display: flex;
    text-align: left;
`;

function Comment(props) {
    return(
        <CommentContainer>
            <CommentH4>{props.comment.username}</CommentH4>
            <CommentP>{props.comment.text}</CommentP>
        </CommentContainer>
    )};

export default Comment;