import React from 'react';
import Comment from './Comment';
import CommentActions from './CommentActions';
import CommentLikes from './CommentLikes';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div className="post-comments">
      <CommentActions />
      <CommentLikes likes={props.likes} />
      {props.comments.map(user =>
        <Comment username={user.username} text={user.text} />
      )}
    </div>
  );
}

export default CommentSection;
