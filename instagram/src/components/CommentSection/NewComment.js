import React from 'react';

const NewComment = ({inputValue, submitNewComment, updateInputValue}) => {
    return (
        <div>
        <form onSubmit={submitNewComment}>
          <input
            type='text'
            placeholder='Add a comment'
            value={inputValue}
            onChange={updateInputValue}
          />
        </form>
      </div>
    )
}

export default NewComment;
