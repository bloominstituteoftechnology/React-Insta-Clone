import React from 'react';
import './CommentSection.css';

const CommentSectionTimestamp = (props) => {
  return(
    <div className="comment-section__timestamp">{props.timestamp}</div>
  );
};

export default CommentSectionTimestamp;