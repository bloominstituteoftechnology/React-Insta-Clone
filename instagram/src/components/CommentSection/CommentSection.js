import React from 'react';
import Comment from './Comment';

import './CommentSection.css'

function CommentSection(props) {
  const comments = props.commentData.map(commentData => {
    return <Comment commentData={commentData} />
  });
  return (
    <div className="comment-section">
      {comments}
      <form className="new-comment-form">
        <input type="text" value="New Comment"/>
      </form>
    </div>
  );
}

export default CommentSection;