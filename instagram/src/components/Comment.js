import React from 'react';

function Comment(props) {
    return (
        <div>
            <h2>{props.commentData.username}</h2>
            <p>{props.commentData.text}</p>
        </div>
    )
}

export default Comment;

