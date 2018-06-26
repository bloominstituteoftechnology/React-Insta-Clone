import React from 'react';

const Comment = props => {
    return (
        <form className="comment-input">
        <input
        type="text"
        placeholder="Add a comment as..."
        ></input>
        </form>
    )
}

export default Comment;