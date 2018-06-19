import React from 'react';
import './CommentSection.css';

const CommentSectionForm = (props) => {
  return(
    <form className="comment-section__form">
      <input type="text" className="comment-section__input" placeholder="Add a comment..." />
    </form>
  );
};

export default CommentSectionForm;