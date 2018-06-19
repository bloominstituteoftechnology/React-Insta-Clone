import React from "react";
import "./CommentSection.css";

const Comment = props => {
    return (
        <div className="comment-text">
            <span className="user">{props.comment.username}</span>{' '}
            <span className="comment">{props.comment.username}</span>
        </div>
    );
}

export default Comment