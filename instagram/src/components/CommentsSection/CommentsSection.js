import React from 'react';
import Comment from './Comment';

const CommentsSection = (props) => {
  return (
      <div className="comments-section">
        {props.commentsArray.map(comment => <Comment username={comment.username} text={comment.text} key={comment.username} />)}
      </div>
    );
}

export default CommentsSection;
