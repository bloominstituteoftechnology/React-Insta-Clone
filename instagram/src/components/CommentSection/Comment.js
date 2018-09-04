import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    return (
        <div className='comment-text'>
            <span className='user'>{props.comment.username}</span>
            <span className='comment'>{props.comment.text}</span>
        </div>
    );
};

Comment.PropTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment;