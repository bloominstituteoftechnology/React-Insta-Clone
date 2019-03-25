import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentSection = props => {
  return (
    <div className="comments">
      {props.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            username={comment.username}
            text={comment.text}
          />
        );
      })}
      <p className="timeline">{props.date}</p>
    </div>
  );
};

Comment.proptypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
