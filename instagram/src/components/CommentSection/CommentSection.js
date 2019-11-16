import React from 'react';

const CommentInput = props => {
    return (
      <form onSubmit={props.saveHandler}>
        <input 
        onChange={props.changeHandler}
        value={props.comment} 
        type="text" 
        placeholder="Add comment... " />
      </form>
    );
  };
  
  export default CommentInput;