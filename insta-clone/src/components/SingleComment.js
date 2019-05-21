//Single comment
import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div>
      <p>{props.comment.text}</p>
      <p>{props.comment.username}</span>
    </div>
  );
};

Comment.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
        })
      )
    })
  )
}

Comment.defaultProps = {
  dummyData: []
}

export default Comment;
