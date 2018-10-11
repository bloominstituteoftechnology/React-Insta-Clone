import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv = styled.div`
    padding-top: 2px;
    margin-top: 19px;
    position: relative;
`;

const Username = styled.h2`
    display: inline-block;
    font-size: 14.5px;
    margin: 0;
`;

const Text = styled.p`
    display: inline-block;
    font-size: 15px;
    margin: 0;
    margin-left: 5px;
`;

const Delete = styled.span`
    position: absolute;
    font-size: 14px;
    right: 0px;
    color: grey;
    cursor: pointer;
`;

const Comment = props => {
    return (
        <CommentDiv className="comment">
            <Username>{props.comment.username}</Username>
            <Text>{props.comment.text}</Text>
            <Delete className="deleteComment" onClick={props.deleteComment}>✕</Delete>
        </CommentDiv>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
}

export default Comment;