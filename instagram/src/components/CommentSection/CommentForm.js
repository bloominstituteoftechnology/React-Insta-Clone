import React from 'react';
import './Comments.css';

const CommentForm = props => {
  return (
    <form>
      <div className="Comment-input">
        <input type="text" placeholder="Add a comment..." />
        <i className="fas fa-ellipsis-h fa-sm"></i>
      </div>
    </form>
  );
};

export default CommentForm;