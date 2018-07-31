import React from 'react';




const Comment = props => {
    return(
        <form >
        <input onChange={props.handleComment} placeholder="Add a comment . . ." type="text"/>
        <button onClick={props.addNewComment}>Add Comment</button>
        </form>
    
    );

};

export default Comment;
