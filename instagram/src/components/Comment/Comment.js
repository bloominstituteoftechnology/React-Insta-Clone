import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment">
      <p><strong>{props.comments.username} </strong>{props.comments.text}</p>
    </div>
  )
};

Comment.propTypes = {
  text: PropTypes.string,
}

export default Comment;
