import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            <div>{props.comment.username}</div>
            {props.comment.text}
        </div>
    );
}

export default CommentSection;