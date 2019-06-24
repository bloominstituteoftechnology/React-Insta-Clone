import React from 'react';
import PropTypes from 'prop-types';
import { CommentText, CommentName } from '../ReusableComponents/CommentSection';

const Comment = props => {
    return (
        <CommentText>
            <CommentName onClick={() => props.deleteComment(props.index)}>{props.comment.username} </CommentName>
            {props.comment.text}
        </CommentText>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;