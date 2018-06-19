import React from 'react';
import Comment from './Comment';
import './comment-section.css';

const CommentSection = (props) => {
    return (
      <div class='comments'>
            <ul>
            {props.comments.length <= 5 && props.comments.map((comment, index) => {
                
    return <Comment key = {index} username = {comment.username} text = {comment.text}/>
       })}
        </ul>

  
    </div>
      );
};

export default CommentSection;