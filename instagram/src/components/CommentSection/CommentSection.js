import React from 'react';
import Comment from './Comment';

import './CommentSection.css'

function CommentSection(props) {
  const comments = props.commentData.map((commentData, i) => {
    return <Comment key={i} commentData={commentData} />
  });
  return (
    <div className="comment-section">
      {comments}
      <form className="new-comment-form">
        <input type="text" defaultValue="New Comment"/>
      </form>
    </div>
  );
}

export default CommentSection;