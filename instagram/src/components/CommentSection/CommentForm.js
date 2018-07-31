import React from 'react';




const CommentForm = props => {
    return(
        <div>
        <input onChange={props.addNewComment} placeholder="Add a comment . . ." type="text"/>
        </div>
    
    );

};

export default CommentForm;
