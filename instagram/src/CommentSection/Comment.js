import React from 'react';

const Comment = props => {
    return (
        <div>
            <h1>{props.comment.username}</h1>
            <h2>{props.comment.text}</h2>
        </div>
    )
}

export default Comment;