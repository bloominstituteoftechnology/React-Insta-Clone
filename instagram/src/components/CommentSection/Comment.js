import React from 'react';
import PropTypes from 'prop-types';

const STYLE_BASE = "comment-section_";

const Comment = props => {
  return (
    <div className={`${STYLE_BASE}commentContainer`}>
      <span className={`${STYLE_BASE}comment`}>{props.comment.text}</span>{' '}
      <span className={`${STYLE_BASE}user`}>-{props.comment.username}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;