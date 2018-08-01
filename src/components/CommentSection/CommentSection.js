import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className="d-flex align-items-left">
            <strong>{props.comment.username}</strong>
            {props.comment.text}
        </div>
    )
};

export default CommentSection;