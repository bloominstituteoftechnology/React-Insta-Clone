import React from 'react';




const CommentForm = props => {
    return(
        <form onSubmit={props.addNewComment}>
        <input placeholder="Add a comment . . ." type="text"/>

        </form>
    
    );

};

export default CommentForm;
