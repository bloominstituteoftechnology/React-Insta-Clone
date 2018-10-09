import React from 'react';

const CommentInput = ({ addNewComment, commentText, updateText }) => {
  return (
    <form onSubmit={addNewComment}>
      <input
        type="text"
        className="CommentInput"
        placeholder="Add a comment..."
        value={commentText}
        onChange={updateText}
      />
    </form>
  );
};

export default CommentInput;
