import React from 'react';

const CommentInput = props => {
    return (
        <form className='comment-input' onSubmit={props.addNewComment} onChange={props.handleChange}>  
            <input type='text' class='comment-control' placeholder='Add comment...' />
        </form>
    );
};

export default CommentInput;