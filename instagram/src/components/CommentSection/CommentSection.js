import React from 'react';
import Comment from './Comment';
//import './CommentSection.css';

const CommentSection = props => {
  return (
    <div>
       {props.comments.map(item => <Comment key={Math.random()} obj={item} />)}
    </div>
  )
}

export default CommentSection;
