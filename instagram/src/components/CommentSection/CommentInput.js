import React, { Component } from 'react';

const CommentInput = props => {
    return (
        <div className='comment-section'>
            <form onSubmit={props.addNewComment}>
                <input 
                className='comment-input'
                type = 'text'
                placeholder = 'Add a comment...'
                value={props.inputText}
                onChange={props.handleChange}
                />
            </form>
            <i class="fas fa-ellipsis-h"></i>
        </div>
    )
}

export default CommentInput