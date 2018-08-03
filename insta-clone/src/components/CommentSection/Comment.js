import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentText = styled.div`
    display: flex;
    padding: 5px 0;
    height: auto;
`;

const UserCommented = styled.span`
    font-weight: bold;
    padding-left: 15px;
    width: auto;
    text-align: left;
`;

const CommentTextInputted = styled.span`
    text-align: left;
    padding-left: 5px;
`;

const Comment = props => {
    return (
        <CommentText>
            <UserCommented>{props.comment.username}</UserCommented>
            <CommentTextInputted className="comment">{props.comment.text}</CommentTextInputted>
        </CommentText>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;