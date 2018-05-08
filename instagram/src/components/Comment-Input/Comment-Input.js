import React from 'react';
import "./Comment-Input.css";

const CommentInput = props => {
    return (
        <div className="new-comment-container">
            <span className="timestamp"> {props.timeStamp} </span>
                <input className="new-comment" placeholder="Add a comment..." />
        </div>
    )
}

export default CommentInput;