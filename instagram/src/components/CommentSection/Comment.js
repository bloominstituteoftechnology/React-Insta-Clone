import React from 'react';

export default function Comment({comment}) {

  return (

    <div className='comment'>

      <p><b>{comment.username}</b> {comment.text}</p>

    </div>

  );

}
