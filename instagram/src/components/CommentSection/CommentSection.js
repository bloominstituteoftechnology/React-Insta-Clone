import React from 'react';
import './CommentSection.css'

const CommentSection = props => {
  console.log('Comment Section props are:',{props});
  return <div className="CommentContainer"><h1>I am a Comment Container</h1></div>;
};

export default CommentSection;