import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({comment, id, postID, currentUser, removeComment}) {

  return (

    <div className='comment'>

      <p><b>{comment.username}</b> {comment.text} {currentUser === comment.username ? <span onClick={() => removeComment(postID, id)} className='far fa-trash-alt'></span> : null}</p>

    </div>

  );

}

Comment.propTypes = {

  comment: PropTypes.object

}
