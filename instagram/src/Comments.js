import React from 'react';
import './Search.css';

const Comment = (props) => {
  return (
    <div className="background">
      <div className="appName">Comment</div>
      <input type="text" value={props.comment} onChange={props.changeHandler} />
      <button onClick={props.comment} className="input__button">Comment</button>
      <p></p>
    </div>
  )
}
export default Comment;