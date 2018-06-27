import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
    display: flex;
    margin-left: 3%;
    line-height: 2rem;
`;

const Username = styled.h3`
    font-weight: bold;
    margin-right: 2%;
`;
const UserComment = styled.p`
    font-size: 1.5rem;
`;
const Comment = (props) => {
    return (
        <CommentWrapper>
            <Username >{props.comment.username}</Username>
            <UserComment>{props.comment.text}</UserComment>
        </CommentWrapper>
    )
}

export default Comment;