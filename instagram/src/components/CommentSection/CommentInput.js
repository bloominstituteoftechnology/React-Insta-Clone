import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <form onSubmit = {props.submitAComment}> 
        <input type="text"
        value={props.comment}
        placeholder="Add a comment"
        onChange={props.changeAComment}
         />
        
      </form>
    </div>
  );
};


export default Comment;