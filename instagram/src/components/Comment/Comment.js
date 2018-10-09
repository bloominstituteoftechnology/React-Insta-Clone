import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (
    <div className="comment">
      <h5>{props.comment.username}</h5>
      <p>{props.comment.text}</p>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
};

export default Comment;
