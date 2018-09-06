import React from 'react';
import './CommentSection.css';


const CommentInput = props => {
    return (
        <form onSubmit={props.submitComment} onChange={props.changeComment}>
            <input className="comment-input" type="text" placeholder="Add a comment..." value={props.comment}/>
        </form >
    )
}

export default CommentInput;