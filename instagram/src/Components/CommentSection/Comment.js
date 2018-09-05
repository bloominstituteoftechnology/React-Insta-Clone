import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment" onClick={props.delComment}>
      <span className="comment-user">{props.comment.username}</span>
      {props.comment.text}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
    delComment: PropTypes.func
  })
};

export default Comment;
