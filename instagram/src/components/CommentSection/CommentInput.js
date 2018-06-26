import React from 'react';

const CommentInput = props => {
  return (
    <form>
      <input className="comment-bar" type="text" placeholder="Add comment... " />
    </form>
  );
};

export default CommentInput;