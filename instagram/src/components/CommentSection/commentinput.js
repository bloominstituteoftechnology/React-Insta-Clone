import React from 'react';
import { AddComment } from '../styles';



const CommentInput = props => {
    return (
        <form onSubmit={props.addComment} autoComplete='off'>
            <AddComment 
                placeholder='Add a comment...'
                name='comment'
                value={props.comment}
                onChange={props.handleInputChange}>
            </AddComment> 
        </form>  
    );
}

export default CommentInput;