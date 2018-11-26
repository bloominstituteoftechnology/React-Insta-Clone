import React from 'react';
import Comment from './Comment';
import CommentFooter from './CommentFooter';
import PropTypes from 'prop-types';

function PostCommentsContainer(props) {
  return (
    <div className="post-comments-container">
    	{props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
    </div>
  );
}

PostCommentsContainer.propTypes = {
  comment: PropTypes.object
};

export default PostCommentsContainer;