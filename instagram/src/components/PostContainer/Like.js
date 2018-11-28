import React from 'react';

const Like = props => {
  return [
    <div className='like'>
      <div className='like-icon-container'>
        <span className='icon' onClick={props.likeCounter}><i className="fas fa-heart"></i></span>
        <span className='icon'><i className="fas fa-comment"></i></span>
      </div>
    </div>,
    <div className='like'>
      <div className='like-icon-container'>{props.likes}{'  likes'}</div>
    </div>
  ]
}

export default Like;
