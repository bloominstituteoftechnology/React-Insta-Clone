import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comments-section">
            <span>{props.comment.username}</span>
            {props.comment.text}
        </div>
    );
}


export default CommentSection;