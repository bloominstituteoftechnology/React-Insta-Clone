import React from 'react';

const InputComment = props => {
 

  return (
    <div>
      <form className="comment-input" onSubmit={(event) => props.handleAddComment(event)}>
        <input
          className="input-text-comment"
          type="text"
          placeholder={'Add comment...'}
          value={props.inputText}
          onChange={props.handleChange}
          name = {props.username}
        />

      </form>
    </div>
  );
};

export default InputComment;