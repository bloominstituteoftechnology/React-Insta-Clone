import React from 'react';
import './Comment.css';
import styled from 'styled-components';

const CommentStyling = styled.div`
    display: flex;
    font-size: 14px;
    margin-left: 3%;
    text-align: left;
`;

const Words = styled.p`
    line-height: 22px;
    margin: 2px 0;
`;

const Comment = (props) => {
    return (
        <CommentStyling>
            <Words><strong>{props.username}</strong>   {props.text}</Words>
        </CommentStyling>
    )
}

export default Comment;