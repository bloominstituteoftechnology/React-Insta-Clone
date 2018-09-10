import React from 'react';

function Comment(props) {
    return (
        <div className="Comment">
        {props.comment.username} - {props.comment.text}
        </div>
    )
}

export default Comment;