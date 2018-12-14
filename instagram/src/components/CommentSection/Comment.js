import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment-container">
            <div className="username">{props.username}</div>
            <div className="comment">{props.text}</div>
        </div>
    )
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};
export default Comment;