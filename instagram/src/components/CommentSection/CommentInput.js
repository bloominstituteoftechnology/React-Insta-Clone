import React from 'react';

const CommentInput = props => {
    return (
        <form onSubmit={props.submitComment}>
        <input
        onChange={props.changeComment}
        type="text"
        placeholder="Add comment"
        />
        </form>
    );
};

export default CommentInput;