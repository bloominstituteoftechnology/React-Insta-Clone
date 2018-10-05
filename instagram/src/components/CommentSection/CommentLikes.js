import React from 'react';
import PropTypes from 'prop-types';

const CommentLikes = props => {
  return (
    <>
      <span className="post-comment-likes">{props.likes+ ' likes'}</span> 
    </>
  );
}

CommentLikes.propTypes = {
  likes: PropTypes.number.isRequired,
}

export default CommentLikes;
