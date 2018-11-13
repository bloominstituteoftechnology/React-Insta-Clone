import React from 'react';

const CommentInput = props => {
    return (
        <form onSubmit={props.addNewComment} >
            <input 
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