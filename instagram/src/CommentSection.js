import React from 'react';
import './CommentSection.css';
export const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return (

          <div className = "comment_Box">
            {console.log(comment)}
            <div> <b>{comment['username']}</b> {comment['text']}</div>
            
//           <div>
//             <div>{comment.username}</div>
//             <div>{comment.text}</div>
          </div>
        );
      })}
    </div>
  );
};
