import React from 'react';


 const CommentInput = props => {
  return ( 
    <form onSubmit={props.addNewComment}>
      <input 
        type="text" 
        value={props.comment}
        placeholder="Add comment " 
        onChange={props.commentInputHandler}
      />
      <button type='submit'>Add Comment</button>
    </form>
  );
};
 export default CommentInput;


