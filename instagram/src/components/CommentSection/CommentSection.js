import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => (
  <div className="comments">
    {props.comments.map((c, i) => (
      <Comment {...c} key={i}/>
    ))}
  </div>
);

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;
