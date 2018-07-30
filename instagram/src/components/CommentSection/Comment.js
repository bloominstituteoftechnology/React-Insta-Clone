import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = (props) => {
    console.log(props);
    
    return (
        <div className="comment-container">
            <div className="comment-username">{props.comment.username}</div>
            <div className="comment-text">{props.comment.text}</div>
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
};

export default Comment;