import React from 'react';

let Comment = props => {
    return (
        <div className="comment">
            <h2>{props.comment.username}</h2>
            <p>{props.comment.text}</p>
        </div>
    )
}

export default Comment;