import React from 'react';
import './CommentSection.css';

const CommentSection = ({ props }) => {
    return (
        <div className="comment__container">
        <p><span className="user__comment">{props.username}</span>{props.text}</p>
        </div>
    )
}

export default CommentSection;