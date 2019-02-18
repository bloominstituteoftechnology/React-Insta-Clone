import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => (
  <div>
    {props.comments.map((c, i) => (
      <Comment {...c} key={i}/>
    ))}
    <input
      type="text"
      placeholder="Add a comment..."
    />
  </div>
);

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;
