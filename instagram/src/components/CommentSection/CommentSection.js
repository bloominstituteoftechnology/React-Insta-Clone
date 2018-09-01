import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';

const CommentSection = (props) => {
  return (
    <div className='CommentSection'>
      {props.comments.map(comment =>
        <Comment  key={comment.username + ': ' + Date.now() +
                    Math.round(Math.random()*1000)}
                  comment={comment} />
      )}
    </div>
  );
}

export default CommentSection;