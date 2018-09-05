import React from 'react';

// This component will contain the comment field

const CommentBar = (props) => {
  return (
    <form onSubmit={props.addNewComment} onChange={props.handleChange}>
    <input
    type="text"
    value={props.newComment}
    name="newComment"
    placeholder="Add a comment..."
    />

    </form>
  );
}

export default CommentBar;
