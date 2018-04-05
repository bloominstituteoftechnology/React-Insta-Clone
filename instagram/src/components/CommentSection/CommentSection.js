import React from 'react';

const CommentSection = props => {
  return (
    <div className="comments-container">
      {props.comments.map((c, i) => (
        <div key={c + i}><span className="username">{c.username}</span>: {c.text}</div>
      ))}
      <div className="input-container">
        <input className="comment-input" type='text' placeholder='Add a comment...' onChange={props.change} value={props.value} />
        <div onClick={props.submit}><img src="img/elipsis.png" /></div>
      </div>
    </div>
  );
}

export default CommentSection;
