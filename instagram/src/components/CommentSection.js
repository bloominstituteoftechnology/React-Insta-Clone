import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentSection = props => {
  return (
    <div>
      <div className="comments">
        {props.comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              username={comment.username}
              text={comment.text}
              timeStamp={comment.timeStamp}
            />
          );
        })}
      </div>
      <CommentInput
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        id={props.id}
        text={props.text}
      />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
