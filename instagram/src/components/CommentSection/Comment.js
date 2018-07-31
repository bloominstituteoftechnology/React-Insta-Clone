import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return (
        <div> 
            <span className="comment-user" >{props.comment.username} </span>
            <span> {props.comment.text}</span>
        </div>
    );
};

export default Comment;