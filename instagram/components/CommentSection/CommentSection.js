import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
  return <button className='actionBtn'>{props.action}</button>;
}

export default CommentSection;