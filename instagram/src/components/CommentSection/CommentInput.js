import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input type="text" placeholder="Add comment... " />
      <input type="submit"/>
    </form>
  );
};

export default CommentInput;