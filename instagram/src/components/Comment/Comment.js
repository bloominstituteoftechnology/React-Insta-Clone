import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import './Comment.css';

// styled-components
const CommentContainer = styled.div`
    font-size: 18px;
    display: flex;
    margin: 10px 20px;

    span:first-child {
        font-weight: bold;
        margin: 0 8px 0 0;
    }
`;

// Return Comment
const Comment = props => {
    return (
        <CommentContainer>
            <span>{props.comment.username}</span>
            <span>{props.comment.text}</span>
        </CommentContainer>
    );
};

// prop-type check
Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;