import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components'; 

const CommentText = styled.div `
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 7px;
    `;

const User = styled.span `
        font-weight: bold;
        font-size: 14px;
        padding-left: 10px;
    `;

const Caption = styled.span `
        font-size: 14px;
        padding-left: 5px;
    `;

const Comment = props => {
    return (
        <CommentText>
            <User>{props.comment.username}</User>
            <Caption>{props.comment.text}</Caption>
        </CommentText>
    );
};

Comment.PropTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment;