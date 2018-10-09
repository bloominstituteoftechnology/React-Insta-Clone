import React from 'react';



const CommentInput = props => {
    return (
        <form onSubmit={props.addComment} autoComplete='off'>
            <input                        
                className='add-comment' 
                placeholder='Add a comment...'
                name='comment'
                value={props.comment}
                onChange={props.handleInputChange}>
            </input> 
        </form>  
    );
}

export default CommentInput;