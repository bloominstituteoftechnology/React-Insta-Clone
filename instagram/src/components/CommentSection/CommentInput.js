import React from 'react';

const CommentInput = props => {
  return (
    <form>
      <input
        onChange={props.commentInput}
       type="text" 
       placeholder="Add comment... "
        />
    </form>
  );
};

export default CommentInput;
