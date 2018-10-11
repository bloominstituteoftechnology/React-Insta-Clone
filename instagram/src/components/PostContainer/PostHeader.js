import React from 'react';
import './Post.css';

const PostHeader = props => {
  return (
    <div className='post__header'>
      <div>
        <img className='post__header--avatar' src={props.thumbnailUrl} alt="no" />
      </div>
      <div>
        <h3 className='post__header--username'>{props.username}</h3>
      </div>
      
    </div>
  )
};

export default PostHeader;