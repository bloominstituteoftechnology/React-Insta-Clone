import React from 'react';

import './CommentSection.scss';

export default function CommentSection({comments, time}) {

  return (

    <div className='comment-section'>

      <p>{comments.map(comment => (
        <div className='comment'>

          <h4>{comment.username}</h4>
          <p>{comment.text}</p>

        </div>
    ))}</p>

    </div>

  );

}
