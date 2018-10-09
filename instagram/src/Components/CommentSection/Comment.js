import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return(
        <div className="comment-container">
            <p className="comment-username">
            {props.username}
            </p>
            <p className="comment">{props.text}</p>
        </div>
    )
}

export default Comment;