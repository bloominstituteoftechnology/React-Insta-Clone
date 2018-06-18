import React from 'react'

function Comment (props) {
    return (
        <div className="comment">
            <h2>{props.comment.username}</h2>
            <p>{props.comment.text}</p>
        </div>
    );
}

export default Comment;