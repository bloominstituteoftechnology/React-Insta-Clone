import React from 'react';
import './CommentSection.css'

const CommentInput = props => {
    return (
        <form className="comment-input" onSubmit={props.submitComment}>
            <input type="text" value={props.comment} onChange={props.commentHandler} placeholder="Add a comment..." />
        </form>
    );
};

export default CommentInput;