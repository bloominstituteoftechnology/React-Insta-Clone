import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <div className="Comment-container">
      {props.comments.map((comment, i) =>
        <div key={i}>
          <Comment comment={comment} />
        </div>
      )}
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
