import React from 'react';

const CommentInput = props => {
    return (
        
        <form onSubmit={props.addNewComment} onChange={props.handleInput}>
            <input type='text' name='newComment' placeholder='Add comment'  />
        </form>
       
    );
};

export default CommentInput;