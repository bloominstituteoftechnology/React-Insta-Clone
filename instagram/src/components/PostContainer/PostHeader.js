import React from 'react';

const PostHeader = props => {
  return (
    <div className='post-header'>
      <img
        className='thumbnail'
        src={props.thumbnailUrl}
        alt='user thumbnail'
      />
      <div>
        <div>{props.username}</div>
      </div>
    </div>
  )
}

export default PostHeader;
