import React from 'react';

const CommentInput = props => {
  return (
    <form>
      <input 
      className="comment-bar" type="text" placeholder="Add comment... "
      value={props.comment} onChange={props.newComment}/>
    </form>
  );
};

export default CommentInput;