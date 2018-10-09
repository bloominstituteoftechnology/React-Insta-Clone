import React from 'react';
import './Comment.css';

const CommentInput = props => {
    return (
        <form className="add-comment">
            <input type="text" placeholder="Add comment.." />
        </form>
    );
}

export default CommentInput;