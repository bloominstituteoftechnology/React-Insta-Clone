import React from 'react';
import Comment from './Comment';

const CommentSection = props => (
  <div>
    {props.comments.map((c, i) => (
      <Comment {...c} key={i}/>
    ))}
  </div>
);

export default CommentSection;
