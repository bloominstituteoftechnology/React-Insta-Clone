import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentContainerDiv = styled.div `
    text-align: left;
    margin: 5px 0px;

    .user {
        font-weight: bold;
    }
`

const Comment = props => {
    return (
        <CommentContainerDiv>

            <span className = 'user'>
                {props.comment.username}
            </span>
            
            {' '}
            
            <span className = 'comment'>
                {props.comment.text}
            </span>
            
            </CommentContainerDiv>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}


export default Comment;