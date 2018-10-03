import React from 'react';
import './NewComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewComment = (props) => {
  return (
    <form className='comment-section' onSubmit={props.onSubmit}>
        <input placeholder='Add a comment...' value={props.value} onChange={props.onChange}></input>
        <FontAwesomeIcon icon='ellipsis-h'/>
    </form>
  );
}

export default NewComment;
