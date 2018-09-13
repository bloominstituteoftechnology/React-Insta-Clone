import React from 'react';

function CommentInput(props) {
    return (
        <form onSubmit={props.addNewComment}>
            <input onChange={props.handleChange} name="commentInput" type="text" placeholder="Add a Comment..." value={props.commentInput}/>
        </form>
    )
}

export default CommentInput;
