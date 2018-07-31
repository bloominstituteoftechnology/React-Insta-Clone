import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            <div>
                <b>{props.comment.username}</b> 
                <span> {props.comment.text} </span>
            </div>
        </div>
    );
}

export default CommentSection;