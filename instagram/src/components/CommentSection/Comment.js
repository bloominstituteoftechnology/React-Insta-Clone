import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({comment}) {

  return (

    <div className='comment'>

      <p><b>{comment.username}</b> {comment.text}</p>

    </div>

  );

}

Comment.propTypes = {

  comment: PropTypes.object

}
