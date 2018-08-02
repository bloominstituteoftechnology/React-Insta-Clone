
import React from 'react';
import './Comment.css';

const CommentInput = props => {
  return (
    <form onSumbmit={props.submitHandler}>
      <input onchange={props.changeHandler}
      className="add-comment" type="text" placeholder="Add comment... " />
    </form>
  );
};

export default CommentInput;
