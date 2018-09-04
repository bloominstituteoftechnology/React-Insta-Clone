import React from 'react';

const CommentInput = props => {
    return (
        <form>
            <input type='text' className='comment-input' placeholder='Add a comment...' />
        </form>
    )
}

export default CommentInput;