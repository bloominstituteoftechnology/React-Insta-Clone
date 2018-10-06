import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
        <div className="comment">
            <p><strong>{props.username}</strong>   {props.text}</p>
        </div>
    )
}

export default Comment;