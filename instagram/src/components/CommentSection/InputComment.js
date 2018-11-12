import React from 'react';

const InputComment = props => {
  return (
    <div>
      <form className="comment-input">
        <input
          className="input-text-comment"
          type="text"
          placeholder="Add a comment..."
        
        />

      </form>
    </div>
  );
};

export default InputComment;