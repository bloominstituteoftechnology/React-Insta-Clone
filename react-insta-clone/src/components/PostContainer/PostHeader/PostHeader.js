import React from 'react';
import './PostHeader.css';
import propTypes from 'prop-types';

const PostHeader = (props) => {
  return (
    <section className='post-header'>
      <img src={props.thumbnailUrl} alt={props.username}/>
      <h2>{props.username}</h2>
    </section>
  );
}

PostHeader.propTypes = {
  username: propTypes.string,
  thumbnailUrl: propTypes.string
}

export default PostHeader;
