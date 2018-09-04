import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return (
        <div className="comment">
           <span className="comment-username">{props.comment.username} <span className="comment-text">{props.comment.text}</span></span> 
        </div>
    )
}

export default Comment;