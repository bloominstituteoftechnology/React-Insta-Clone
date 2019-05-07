import React from 'react';

const STYLE_BASE = "comment-section_";

const CommentInput = props => {
  return (
    <form className={`${STYLE_BASE}formContainer`} onSubmit={props.submitComment} >
      <input
        type="text"
        placeholder="Add comment... "
        value={props.comment}
        onChange={props.changeComment}
        className={`${STYLE_BASE}formInput`}
      />
    </form>
  );
};

export default CommentInput;