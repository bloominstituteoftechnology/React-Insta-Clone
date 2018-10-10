import React from 'react';

const CommentInput = ({ addNewComment, commentText, updateText, id }) => {
  return (
    <form className="Comment-Form" onSubmit={e => addNewComment(e, id)}>
      <input
        type="text"
        className="CommentInput"
        placeholder="Add a comment..."
        value={commentText}
        onChange={updateText}
      />
      <div className="Comment-Options">
        <i className="fas fa-ellipsis-h" />
      </div>
    </form>
  );
};

export default CommentInput;
