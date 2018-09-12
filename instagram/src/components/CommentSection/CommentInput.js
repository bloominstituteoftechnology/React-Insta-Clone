import React from 'react';

function CommentInput(props) {
    return (
        <form onChange={props.updateComment} onSubmit={props.submitComment}>
            <input name="commentInput" type="text" placeholder="Add a Comment..." value={props.CommentInput} />
        </form>
    )
}

export default CommentInput;
