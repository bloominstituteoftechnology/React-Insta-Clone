import React from 'react';

const InputComment = props => {
 

  return (
    <div>
      <form className="comment-input" onSubmit={(event) => props.handleAddComment(event, props.username)}>
        <input
          className="input-text-comment"
          type="text"
          placeholder={'Add comment...'}
          value={props.inputComment.currentUserCommentInput}
          onChange={props.handleChange}
          name = {props.username}
        />

      </form>
    </div>
  );
};

export default InputComment;