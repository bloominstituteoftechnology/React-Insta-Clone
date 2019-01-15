import React from 'react';

import './Comment.css';

const NewCommentForm = props => {
  return (
    <form className="post-comment-form">
      <textarea className="post-comment-form-text" placeholder="Add a comment..."></textarea>
      <div className="post-comment-form-options">&#xf141;</div>
    </form>
  );
};

export default NewCommentForm;