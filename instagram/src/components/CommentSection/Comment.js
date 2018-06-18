import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
        <div className = 'comment-container'>
            <h3 className='username'>{props.comment.username}</h3>
            <p className='comment'>{props.comment.text}</p>
        </div>
    )
}

export default Comment;