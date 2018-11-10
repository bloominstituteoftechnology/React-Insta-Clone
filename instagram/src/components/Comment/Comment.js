import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div>
            {props.comment.username} said: {props.comment.text}
        </div>
    );
}

export default Comment;