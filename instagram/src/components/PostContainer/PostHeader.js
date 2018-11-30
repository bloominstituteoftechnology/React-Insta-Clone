import React from 'react';
import './Posts.css';

const PostHeader = props => {
  return(
    <div className='p-header'>
      <div className='p-simg-container'>
        <img className='p-simg'
          src={props.thumbnailUrl}
        />
      </div>
      <div className='username'>{props.username}</div>
    </div>
  )
}

export default PostHeader;
