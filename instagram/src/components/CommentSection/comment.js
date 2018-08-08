import React from 'react';
import './Comment.css';

const Comment = props => {
    return(
        <div className="comments">
            <span className="user-comment">{props.comment.username}</span>
            <span className="text-comment">{props.comment.text}</span>
        
        </div>
    );    
};

export default Comment;