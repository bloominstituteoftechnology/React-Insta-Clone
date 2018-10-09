import React from 'react';
import './Comments.css';

const CommentForm = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <div className="Comment-input">
        <input
          type="text"
          placeholder="Add a comment..."
          name="newComment"
          value={props.newComment}
          onChange={props.commentHandler}
        />
        <i className="fas fa-ellipsis-h fa-sm"></i>
      </div>
    </form>
  );
};

export default CommentForm;
