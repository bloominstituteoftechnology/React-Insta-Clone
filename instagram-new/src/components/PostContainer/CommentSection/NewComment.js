
import React from 'react';
import { InputComment } from './CommentStyle';

const CommentAdd = props => { 
    return (
        <div>
            <form onSubmit = {props.addNewComment}>
                <InputComment name = 'newComment' onChange = {props.inputChange} className = 'comment-input' type='text' placeholder ='Add a comment...'></InputComment>
            </form>
        </div>
    );
}

export default CommentAdd;