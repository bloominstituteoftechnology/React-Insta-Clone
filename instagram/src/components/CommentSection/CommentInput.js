import React from 'react';

function CommentInput(props) {
    return (
        <form onSubmit={props.addNewComment} onChange={props.handleChanges}>
            <input
              type = "text"
              name = "comment"
              placeholder = "Add a comment..."
            />
        </form>
      );
}

export default CommentInput;