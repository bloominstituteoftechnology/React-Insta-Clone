import React from 'react';

import Comment from './Comment';

const CommentSection = props => {
  return (
    <div className="comments">
      {props.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            username={comment.username}
            text={comment.text}
          />
        );
      })}
      <p className="timeline">{props.date}</p>
    </div>
  );
};

export default CommentSection;
