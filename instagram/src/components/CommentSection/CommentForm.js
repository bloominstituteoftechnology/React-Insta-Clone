import React from 'react';

let CommentForm = props => {
    return(
        <form onSubmit={props.addNewComment} autoComplete="off">
            <input type='text' name="newComment" placeholder="Add a comment" value={props.value} onChange={props.changeHandler} />
        </form>
    )
}

export default CommentForm;
