import React from 'react';
import Comment from './Comment';
import './Comment.css';

const CommentCard = props => {
  return (
    <div className="comment-card">
      {props.comments.map((comment, i) => {
        return <Comment data={comment} key={i+1} />
      })}
    </div>
  )
}

export default CommentCard;
