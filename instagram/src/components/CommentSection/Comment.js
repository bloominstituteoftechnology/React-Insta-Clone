import React from 'react';

 function Comment(props) {
  return (
    <div className="comment">
      <h3>{props.comment.username}</h3>
      <p>{props.comment.text}</p>
    </div>
  );
}

 export default Comment;