
import React from 'react';
import './Comment.css' 

const CommentAdd = props => { 
    return (
        <div>
            <form onSubmit = {props.addNewComment}>
                <input name = 'newComment' onChange = {props.inputChange} className = 'comment-input' type='text' placeholder ='Add a comment...'></input>
            </form>
        </div>
    );
}

export default CommentAdd;