import React from 'react';

const CommentInput = (props) =>{
  return (
    <form 
      className='comment-bar'
      onSubmit={(e) => props.handleOnSubmit(e, props.index)}>

      <input 
        onChange={props.handleOnChange}
        type={'text'}
        className={'comment-input'}
        placeholder={'Add a comment...'}
        value={props.inputText}
      />

      <i className="fas fa-ellipsis-h comment-item" />
    </form>
  )
}

export default CommentInput;