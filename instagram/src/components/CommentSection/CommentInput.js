import React from 'react';
import './CommentInput.css';

const CommentInput = props => {
    return (
        <form onSubmit={props.addNewComment} >
            <input
                className="comment-input" 
                type="text" 
                name="inputText"
                placeholder="Add a comment..."
                value={props.inputText}
                onChange={props.commentHandler}
            />
        </form>
    )
}

export default CommentInput;