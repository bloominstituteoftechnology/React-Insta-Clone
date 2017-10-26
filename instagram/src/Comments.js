import React from 'react';
import './Comments.css';

const Comment = (props) => {
  return (
    <div className="comment--background">
      <div className="comment">Leave a comment:</div>
      <input type="text" value={props.comment} onChange={props.changeHandler} />
      <button onClick={props.comment} className="input__button">Comment</button>
      <p></p>
    </div>
  )
}
export default Comment;