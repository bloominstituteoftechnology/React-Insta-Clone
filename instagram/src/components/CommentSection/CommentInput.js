import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <form>
        <input type="text" placeholder="Add a comment" />
      </form>
    </div>
  );
};


export default Comment;