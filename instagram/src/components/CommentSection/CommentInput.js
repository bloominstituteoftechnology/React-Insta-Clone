import React from 'react';

const CommentInput = props => {
    return(
        <form onSubmit={props.addNewComment}>    
            <input  
                type="text"
                onChange={props.changeHandler}
                placeholder="Add a comment..." 
                value={props.comment}
            />
        </form>
    );
}

export default CommentInput;