import React from 'react';

const CommentInput = props => {
    return (
        <form className='add-comment-form' onSubmit={props.addComment}>
            <input className='add-comment'
                type='text'
                value={props.comment}
                placeholder='Add a comment...'
                onChange={props.handleInput}
            />
            <img className='more-icon' src="https://png.icons8.com/metro/50/000000/more.png" alt='' />
        </form >
    );
};

export default CommentInput;