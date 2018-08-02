import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className="d-flex align-items-left">
            <strong>{props.comment.username}</strong>
            {props.comment.text}
            {props.comment.text.push(props.value)}
        </div>
    )
};

export default CommentSection;