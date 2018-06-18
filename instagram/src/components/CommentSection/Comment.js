import React from 'react';
import './CommentSection.css';
import CommentUsername from './CommentUsername';
import CommentText from './CommentText';

const Comment = (props) => {
  return(
    <li className="comment">
      <CommentUsername />
      <CommentText />
    </li>
  );
};

export default Comment;