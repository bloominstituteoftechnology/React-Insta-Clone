import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
// this component contains all comments in a given post

const CommentSection = props => {
  return (
    <div className="commentSection">
    {props.commentData.map((comment, index) => (
      <Comment
        key={index}
        username={comment.username}
        text={comment.text}
      />

    )
  )}
  </div>

)
}

CommentSection.propTypes = {
  commentData: PropTypes.array
}

export default CommentSection;
