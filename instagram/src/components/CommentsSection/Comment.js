import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment">
      <p><strong>{props.username}</strong> {props.text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    comment: PropTypes.string
  })
};

export default Comment