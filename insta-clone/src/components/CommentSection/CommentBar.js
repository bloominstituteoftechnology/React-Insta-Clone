import React from 'react';

// This component will contain the comment field

const CommentBar = (props) => {
  return (
    <form>
    <input
    type="text"
    value={props.commentText}
    onChange={props.handleComment}
    onSubmit={props.addComment}
    placeholder="Add a comment..."
    />
    <button onClick={props.addComment}>Comment</button>
    </form>
  );
}

export default CommentBar;
