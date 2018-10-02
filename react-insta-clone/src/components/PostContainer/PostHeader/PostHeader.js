import React from 'react';
import './PostHeader.css';

const PostHeader = (props) => {
  return (
    <section className='post-header'>
      <img src={props.thumbnailUrl} alt={props.username}/>
      <h2>{props.username}</h2>
    </section>
  );
}

export default PostHeader;
