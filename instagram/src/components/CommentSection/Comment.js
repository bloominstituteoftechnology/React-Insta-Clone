import React from 'react';
import propTypes from 'prop-types';
import './Comment.css';


const Comment = props => {
    return (
        <div className = "comment-text">
            <span className = "comment">{props.comment.text}</span>{' '}
            <span className = "user">-{props.comment.username}</span>
        </div>
    );
};



Comment.propTypes = {
    comment: propTypes.shape({
        text: propTypes.string,
        username: propTypes.string


    })
};

export default Comment;