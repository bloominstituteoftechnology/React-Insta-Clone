import React from 'react';

const CommentInput = props => {
    return (
        <form onSubmit={props.commentSubmitHandler}>
            <input  
            onChange={props.changeHandler}
            value={props.comment} 
            type="text" 
            placeholder="Add comment..." />
        </form>
    );
};

export default CommentInput;