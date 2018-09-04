import React from 'react';

function Comment(props) {
  return (
    <div className='single-comment'>
      <h4 className='user-comment'>{props.profileObject.username}</h4>
      <p className='user-text'>{props.profileObject.text}</p>
    </div>
  );
}

export default Comment;