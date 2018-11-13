import React, { Component } from 'react';
import './Comments.css';

const CommentSection = props => {
    return (
        <div className='comment-section'>
            <p><span className='heavy-font'>{props.comment.username}</span> {props.comment.text}</p>
        </div>
    )
}

export default CommentSection;