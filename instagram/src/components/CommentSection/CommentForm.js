import React from 'react';




const CommentForm = props => {
    return(
        <form onChange={props.handleComment}>
        <input  placeholder="Add a comment . . ." type="text"/>
        <button onClick={props.addNewComment}>Add Comment</button>
        </form>
    
    );

};

export default CommentForm;
