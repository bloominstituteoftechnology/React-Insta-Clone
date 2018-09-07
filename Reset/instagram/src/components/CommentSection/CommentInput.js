import React from 'react';
import './Comment.css';

const CommentInput = props => {
  console.log(props.comment);
  return (
    <form onSubmit={props.handleaddNewComment} >
      <input className= "commentbox" type="text" placeholder="Add comment... " onChange={props.inputText} />
    </form>
  );
};

export default CommentInput;
