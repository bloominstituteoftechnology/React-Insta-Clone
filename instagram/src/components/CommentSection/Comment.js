import React from 'react';

const Comment = props => {
  console.log('props', props);
  return (
    <div className='comment'>
      <div>
        {props.comment.username}
      </div>
      <div>
        <p>{props.comment.text}</p>
      </div>
    </div>
  )
}

export default Comment;
