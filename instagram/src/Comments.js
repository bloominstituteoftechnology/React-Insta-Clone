import React from 'react';
import './Search.css';

const Comment = (props) => {
  return (
    <div className="background">
      <div className="appName">JaPANgram</div>
      <input type="text" value={props.comment} onChange={props.changeHandler} />
      <button onClick={props.addToList} className="input__button">Add a comment</button>
      <p></p>
    </div>
  )
}

export default Comment;