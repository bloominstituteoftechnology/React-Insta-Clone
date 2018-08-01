import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={this.addComment}>
    <input type="text" placeholder="Add a comment" onChange={this.commentHolder} ></input>
   </form>
  );
};

export default CommentInput;