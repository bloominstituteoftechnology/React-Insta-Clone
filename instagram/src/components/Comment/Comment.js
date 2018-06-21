import React from 'react';
import PropTypes from 'prop-types';
import {CommentContainer} from '../Styles/ReusableStyles';

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