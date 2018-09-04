import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css';

function Comment(props) {
    return (
        <div className='comment'>
            <span className='comment-user'>{`${props.comment.username} `}</span>
            <span>{props.comment.text}</span>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}

export default Comment;
