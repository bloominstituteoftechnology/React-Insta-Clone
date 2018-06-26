import React from 'react';
import './CommentSection.css';
import Comment from '../Comment/Comment.js';

const CommentSection = (props) => {
  return (
    <div>
      {
        props.comments.map(comment => {
          return (
            <Comment 
              key={comment.text}
              comment={comment.text}
              username={comment.username}
            />
          );
        })
      }       
      <input type="text"/>
    </div>
  );
}


export default CommentSection;