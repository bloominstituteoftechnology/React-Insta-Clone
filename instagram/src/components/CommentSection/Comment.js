import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = styled.div`
    text-align: left;
    font-size: 14px;
    padding: 10px;
    margin: 0;
    border: 1px solid gray;

    p {
        margin: 0;
    }
`

const Comment = (props) => {
    return (
        <CommentContainer>
            <p><strong>{props.thisComment.username}</strong> {props.thisComment.text}</p> 
        </CommentContainer>
    );
}

Comment.propTypes = {
    thisComment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment;