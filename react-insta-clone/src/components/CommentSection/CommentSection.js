import React from 'react';
import './CommentSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CommentSection = (props) => {
  return (
    <section className='comment-section'>
        <input placeholder='Add a comment...'></input>
      <FontAwesomeIcon icon='ellipsis-h'/>
    </section>
  );
}

export default CommentSection;
