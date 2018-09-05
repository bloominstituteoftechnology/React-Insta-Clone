import React from 'react';

const CommentInput = props => {
    return (
        <form className='comment-input'>  
            <input type='text' class='comment-control' placeholder='Add comment...' />
        </form>
    );
};

export default CommentInput;