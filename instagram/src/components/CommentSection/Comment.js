import React from 'react';

function Comment(props) {
    return (
        <div className="Comment">
        <span>{props.comment.username}</span>- {props.comment.text}
        </div>
    )
}

export default Comment;