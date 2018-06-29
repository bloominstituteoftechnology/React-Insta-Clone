import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
    <div>
      <p><strong>{props.username}</strong>{props.comment}</p>
    </div>
  );
}

Comment.propTypes = {
  username: PropTypes.string,
  comment: PropTypes.string
};

export default Comment;