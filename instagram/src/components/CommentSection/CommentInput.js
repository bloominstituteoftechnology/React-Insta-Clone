import React from 'react';
import './Comment.css';

const CommentInput = props => {
    return (
        <form>
            <input type="text" placeholder="Add comment.." />
        </form>
    );
}

export default CommentInput;