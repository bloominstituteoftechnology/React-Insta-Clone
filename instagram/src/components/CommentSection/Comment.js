import React from 'react';
import './comment.css'


const Comment = props => {
    return (
        <div className="comment">
            <div className="comment2"><span className="commentusername">{props.com.username}</span>{props.com.text}</div>
        </div>
    )
}

export default Comment;