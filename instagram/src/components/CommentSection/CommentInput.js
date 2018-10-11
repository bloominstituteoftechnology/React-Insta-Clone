import React from 'react';

const CommentInput = props =>{
    return(
        <form onSubmit={props.submitComment} className="add-comment">
            <input 
                type="text"
                placeholder="Add Comment..."
                value={props.comment}
                onChange={props.changeComment}
            />
            <i class="fas fa-ellipsis-h fa-2x"></i>
        </form>
    );
}

export default CommentInput;