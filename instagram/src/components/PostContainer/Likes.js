import React from 'react';

const Likes = props => {
  return (
    <div
      className='likes'
      onClick={props.incrementLike}
    >
      <div>
        <i className='' />
      </div>
    </div>
  )
}
