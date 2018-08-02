import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment-section" >
            <span className="comment-username"><b>{props.comment.username}</b></span>{' '}
            <span>{props.comment.text}</span>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;