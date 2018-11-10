import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.scss';

import Comment from './Comment';

export default function CommentSection({comments, time, addComment}) {

  return (

    <div className='comment-section'>

      {comments.map(comment => (
        <Comment comment={comment} />
      ))}

      <p className='time'>{time}</p>

      <form onSubmit={addComment}>

        <input type='text' placeholder='Add a comment...' />

      </form>

    </div>

  );

}

CommentSection.propTypes = {

  comments: PropTypes.array,
  time: PropTypes.string,
  addComment: PropTypes.func

}
