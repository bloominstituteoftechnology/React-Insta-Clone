import React from 'react';
import "./Comment-Input.css";

const CommentInput = props => {
    return (
        <div>
            <span className="timestamp"> {props.timeStamp} </span>
        </div>
    )
}

export default CommentInput;