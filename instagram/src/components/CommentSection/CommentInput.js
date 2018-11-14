import React from 'react';

const CommentInput =props =>{
    return (
        <form onSubmit={props.addNewComment}>
            <input 
            className='text-input' 
            type="text" 
            placeholder="Add a comment..."
            value={props.inputText}
            onChange = {props.handler}
            
            />
            <p className='expand'>...</p>
        </form>
    )
}

export default CommentInput