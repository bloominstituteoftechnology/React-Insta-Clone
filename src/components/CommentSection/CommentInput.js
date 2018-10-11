import React from 'react';
import './CommentInput.css';

const CommentInput = props => {
    return (
        <div className = "comment-input">
        <form onSubmit = {props.addComment}>
            <input className = "input"
            type= "text"
            onChange = {props.onChange}
            placeholder = "Add a comment..."
            value = {props.value}
            />
        </form>
        </div>
    )
}

export default CommentInput;

