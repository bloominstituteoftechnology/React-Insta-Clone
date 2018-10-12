import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
