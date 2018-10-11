import React from 'react';
import './CommentSection.css';
 const CommentForm = props => {
  return (
    <div className="Comment-input">
      <input type="text" placeholder="Add a comment..." />
      <i class="fas fa-ellipsis-h fa-sm"></i>
    </div>
  );
};
 export default CommentForm;