import React from 'react';
import './CommentSection.css'

// Outputs a comment
function Comment(props) {
    return (
        <div className="comment">
            <strong><p>{props.data.username}</p></strong><p>{props.data.text}</p>
        </div>
    )
}

export default Comment;