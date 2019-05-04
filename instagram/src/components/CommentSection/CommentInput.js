import React from 'react';

// An input field with props to handle changing the field and submitting it. The initial value is an emptry string from the constructor's state. 
const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
