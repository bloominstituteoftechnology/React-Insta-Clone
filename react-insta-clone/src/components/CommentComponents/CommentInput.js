import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.add} >
      <input 
        onChange={props.change}
        value={props.comment}
        type="text"
        placeholder="Add comment... "
       />
    </form>
  );
};

export default CommentInput;
