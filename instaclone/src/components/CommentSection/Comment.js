import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../Styles/Reusable';

const CommentContainer = styled.div`
    margin-left: 10px;
    padding-bottom: 2px;
`

const Comment = props => {
    return(
        <CommentContainer>
            <Username>{props.comment.username}</Username>
            {props.comment.text}
        </CommentContainer>
    )
}

Comment.propTyes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;