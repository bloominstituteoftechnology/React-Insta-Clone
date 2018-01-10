import React from 'react';

const CommentSection = (props) => {
  return (
    <div>
      <ul>
        {props.comments.map(comment => {
          return <li>{comment.username}: {comment.text}</li>
        })}
      </ul>
      <input type="text" placeholder="Add comment (doesn't work yet)" />
      <button>Comment</button>
    </div>
  );
}

export default CommentSection;