import React from 'react';

const CommentInput = props => {
  return (
    <div className="container-add" >
      <form onSubmit={props.addNewComment} onChange={props.handleChange} className="form" >
        <input value={props.Text} className="box"  type="text" name="newComment" placeholder="Add comment... " />
      </form>
    </div>
    
  );
};

export default CommentInput;
