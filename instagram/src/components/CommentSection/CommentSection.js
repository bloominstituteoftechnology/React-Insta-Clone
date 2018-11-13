import React from 'react';
import './CommentSection.css';

import PostStat from './PostStat';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = props => {
  return (
    <div className="post--comments">
      <PostStat />
      <Comment />
      <div className="post--time-stamp">
        2 HOURS AGO
      </div>
      <CommentForm />
    </div>
  );
}

export default CommentSection;