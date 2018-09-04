import React from 'react';

const CommentInput = props => {
  return (
    <form 
      onSubmit={e => {
        props.addNewComment(e);
        }}
      onChange={props.handleChange}
    >
      <input name="inputText" value={props.inputText} type="text" placeholder="Add comment... " />
    </form>
  );
};

export default CommentInput;