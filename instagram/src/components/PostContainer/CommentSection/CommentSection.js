import React from 'react'
import Comment from './Comment'
import './CommentSection.css';

function CommentSection (props) {
    return (
        <div className="comment-section">
            <h1>comments</h1>
            {props.comments.map((comment) => {
                return (
                    <Comment key={comment.username + Date.now()} comment={comment} />
                );
            })
            }
        </div>
    );
}

export default CommentSection;