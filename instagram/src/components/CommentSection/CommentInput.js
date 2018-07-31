import React from 'react';

const CommentInput = props => {
    return (
        <form onSubmit={props.addNewCommentHandler} >
            <input type="text" placeholder="Add coment..." className="comment-input" onChange={props.commentInputHandler} value={props.value} />
        </form>
    );
};

export default CommentInput;