import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import moment from 'moment';

const CommentSection = props => {
  console.log(props.comments);

  return (
    <div className="comment-section">
      {props.comments.map(comment => {
        return (
          <Comment comment={comment} />
        )
      })}
      <div className="timestamp">
        {moment().startOf('day').fromNow(props.timestamp).toUpperCase()}
      </div>
      <input placeholder="Add a comment..."></input>
    </div>
  );
};

export default CommentSection;
