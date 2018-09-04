import React from 'react';

function Comment(props) {
  return (
    <div className='single-comment'>
      <p className='user-comment'>{props.profileObject.username}</p>
      <p className='user-text'>{props.profileObject.text}</p>
    </div>
  );
}

export default Comment;