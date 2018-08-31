import React from 'react';
import './commentSection.css';

const Comment = (props) => {
    return (
        <div className="comment">
            <p>{props.comment.username} {props.comment.text}</p>
        </div>
    )
}

export default Comment;