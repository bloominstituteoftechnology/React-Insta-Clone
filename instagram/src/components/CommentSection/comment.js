import React from 'react';
import './Comment.css';
import styled from 'styled-components';



const CommentsWrapper = styled.div`
    display: flex;
    margin-left: 15px;
    line-height: 25px;
`;

const UserComment = styled.span`
    font-weight: 700;
`;

const TextComment = styled.span`
    margin-left: 5px;
`;



const Comment = props => {
    return(
        <CommentsWrapper>
            <UserComment>{props.comment.username}</UserComment>
            <TextComment>{props.comment.text}</TextComment>
        </CommentsWrapper>
    );    
};

export default Comment;