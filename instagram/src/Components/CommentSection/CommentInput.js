import React from 'react';
import './Comment.css';

const CommentInput = () => {
    return (
        <div className="comment-input">
          <form>
             <input type="text" placeholder="Add Comment..." />
          </form>
        </div>
    );
};

export default CommentInput;