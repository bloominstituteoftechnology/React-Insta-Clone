import React from 'react';

const CommentForm = props => {
  return (
    <form
      className="comment--form"
      action="submit">
      <input type="text" placeholder="Add a comment..."/>
      <button>...</button>
    </form>
  );
}

export default CommentForm;