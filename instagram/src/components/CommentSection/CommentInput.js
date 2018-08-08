import React from 'react';


const CommentInput = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
            type="text"
            placeholder="Add Comment...." 
            onChange={props.handleInput} 
            value={props.value} name="comment" />
        </form>
    );

};

export default CommentInput;