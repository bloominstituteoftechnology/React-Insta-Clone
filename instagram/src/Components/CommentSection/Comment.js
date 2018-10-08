import React from 'react';
import './CommentSection.css';
const Comment = ({info}) => {
    return (
        <div className="comment">
            <h2>{info.username}</h2>
            <p>{info.text}</p>
        </div>
    );
}

export default Comment;
