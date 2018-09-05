import React from 'react';

const CommentInput = props => {
  return (
    <div className='add-comment'>
        <form onSubmit={props.addComment} onChange={props.handleTextInput}>
          <input type='text' className='input-comment' placeholder='Add a comment...' value={props.commentValue} name='comment'></input>
          <input type='submit' value='Enter' />
        </form>        
      </div>
  );
};

export default CommentInput;