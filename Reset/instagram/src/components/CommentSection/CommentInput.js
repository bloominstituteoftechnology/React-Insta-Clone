import React from 'react';
import './Comment.css';

const CommentInput = props => {
  console.log(props.handleaddNewComment);
  return (
    <form>
      <input class= "commentbox" type="text" placeholder="Add comment... " onSubmit ={props.handleaddNewComment}/>
    </form>
  );
};

export default CommentInput;
