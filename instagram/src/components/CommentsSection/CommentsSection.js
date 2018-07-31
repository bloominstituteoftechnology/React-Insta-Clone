import React from 'react';
import Comment from './Comment';
import './CommentsSection.css';

const CommentsSection = (props) => {
  return (
      <div className="comments-section">
        {props.commentsArray.map(comment => <Comment username={comment.username} text={comment.text} key={comment.text} />)}
      </div>
    );
}

export default CommentsSection;
