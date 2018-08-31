import React from 'react';

// this component will be responsible for rendering individual comments
const Comment = props => {
  return (
  <div className="comment">
   <h3 className="comment-username">{props.username}</h3>
   <p className="comment-text">{props.text}</p>
  </div>
)
}

export default Comment;
