import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
    return (
        <div className="comment-text">
            <p className="comment">{props.comment.text}</p>
            <p className="user">{props.comment.username}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string,
    })
}

export default Comment;

