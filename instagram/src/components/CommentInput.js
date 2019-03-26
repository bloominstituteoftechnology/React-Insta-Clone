import React from 'react';

const CommentInput = props => {
  return (
    <div className="post-footer">
      <form onSubmit={props.onSubmit} className="add-a-comment">
        <input
          required
          type="text"
          placeholder="Add a comment..."
          value={props.text}
          name="text"
          onChange={props.onChange}
        />
      </form>
      <button className="more">•••</button>
    </div>
  );
};

export default CommentInput;
