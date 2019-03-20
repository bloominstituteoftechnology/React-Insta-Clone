import React from 'react';

const STYLE_BASE = "comment-section_";

const CommentInput = props => {
  return (
    <form className={`${STYLE_BASE}formContainer`} >
      <input type="text" placeholder="Add comment... " className={`${STYLE_BASE}formInput`} />
    </form>
  );
};

export default CommentInput;