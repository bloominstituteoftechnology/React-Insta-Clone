import React from 'react';
import './Comments.css';

const CommentSection = props => {
    return (
        <div className='comment-text'><strong> {props.comment.username} </strong> {props.comment.text}</div>
    );
}

export default CommentSection;