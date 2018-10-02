import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostIcons = (props) => {
  return (
    <section className='icon-container'>
      <section className='post-icons'>
        <FontAwesomeIcon icon='heart' />
        <FontAwesomeIcon icon='comment-alt' />
      </section>
      <section className='post-likes'>
      {props.likes} <span>likes</span>
      </section>
    </section>
  );
}

export default PostIcons;
