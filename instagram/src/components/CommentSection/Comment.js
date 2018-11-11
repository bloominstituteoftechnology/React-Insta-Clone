import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  console.log(props.data);
  
  return (
    <div>
      <p><span>{props.data.username}</span>{props.data.text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment
