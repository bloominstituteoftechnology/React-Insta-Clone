import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const CommentBox = styled.div`
    text-align: left;
`;
const CommentUsername = styled.span`
    font-weight: bold;
`;

const Comment = props => {

    return(
        <CommentBox >
            <p><CommentUsername>{props.comment.username}</CommentUsername> {props.comment.text}</p>
        </CommentBox>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}


export default Comment;