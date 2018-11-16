import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: flex-start;
    font-weight: 600;
    padding-bottom: 10px;
`;

const UserName = styled.h3`
    font-size: 0.85rem;
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    margin-right: 3px;
`;

const CommentText = styled.p`
    font-size: 0.85rem;
    display: inline-block;
    font-weight: 400;
`;

const Comment = (props) => {
    return (
        <Div>
            <UserName>{props.comment.username}</UserName>
            <CommentText>{props.comment.text}</CommentText>
        </Div>
    );
};

export default Comment;
