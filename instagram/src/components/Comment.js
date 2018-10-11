import React from 'react';
import Username from '../styles/Username';

function Comment(props) {
    return (
        <div>
            <Username type='comment'>{props.commentData.username}</Username>
            <p>{props.commentData.text}</p>
        </div>
    )
}

export default Comment;

