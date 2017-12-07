import React from 'react';

const AddComment = (props) => {
  return (
    <form className='post-add-comment'>
      <input 
        type='text' 
        placeholder='Add comment...'
        value={ props.newComment }
        onChange={ props.typeComment }
      />
      <button onClick={ props.addComment }>Comment</button>
    </form>
  );
};

export default AddComment;