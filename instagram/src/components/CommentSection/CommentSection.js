import React from 'react';
import './CommentSection.css';

import PostStat from './PostStat';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = props => {
  return (
    <div className="post--comments">
      <PostStat likes={props.likes}/>
      {
        props.comments.map(
         (comment,i) => (
           <Comment
            username={props.username}
            key={i + props.username}
            comment={comment} />
      ))}
      <div className="post--time-stamp">
        {props.timestamp}
      </div>
      <CommentForm />
    </div>
  );
}

export default CommentSection;