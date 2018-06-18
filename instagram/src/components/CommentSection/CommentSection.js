import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = props =>
  props.comment.map(c => (
    <div key={uuid()}>
      <div>{c.username}</div>
      <div>{c.text}</div>
    </div>
  ));

CommentSection.propTypes = {
  commnet: PropTypes.shape({
    username: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }),
};
export default CommentSection;
