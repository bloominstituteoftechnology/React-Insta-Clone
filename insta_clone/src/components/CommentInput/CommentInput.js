import React from 'react';

function CommentInput({ handleInput, handleAddComment }) {
  return (
    <form onSubmit={handleAddComment}>
      <input
        onChange={handleInput}
        style={addComment}
        placeholder="Add a comment"
        type="text"
      />
      <i style={float} className="fas fa-ellipsis-h" />
    </form>
  );
}

const addComment = {
  borderStyle: 'none',
  padding: '20px',
  fontSize: '20px'
};

const float = {
  float: 'right',
  margin: '25px 0',
  marginRight: '10px'
};

export default CommentInput;
