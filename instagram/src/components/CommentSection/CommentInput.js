import React from 'react';
import './comment.css'

function CommentInput(props) {
    return (
        <form 
        className='add-comment-container' 
        onSubmit={props.submitComment}>
            <input 
                type="text" 
                value={props.comment}
                placeholder='Add comment . . .'
                onChange={props.changeComment}
            />
        </form>
    );
}

export default CommentInput;