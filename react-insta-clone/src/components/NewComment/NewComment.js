import React from 'react';
import './NewComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewComment = (props) => {
  return (
    <form className='comment-section'>
        <input placeholder='Add a comment...'></input>
      <FontAwesomeIcon icon='ellipsis-h'/>
    </form>
  );
}

export default NewComment;
