import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import CommentSectionTimestamp from './CommentSectionTimestamp';
import CommentSectionInput from './CommentSectionInput';

const CommentSection = (props) => {
  return(
    <div className="comment-section">
      <ul className="comments">
        <Comment />
      </ul>
      <CommentSectionTimestamp />
      <CommentSectionInput />
    </div>
  );
};

export default CommentSection;