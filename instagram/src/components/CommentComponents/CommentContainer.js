import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

import Comment from './Comment.js';

const CommentContainer = props => {
  return (
    <div className="post-comments-area">
      {props.comments.map((commentData, i) =>
        <Comment
          key={commentData._id}
          currentUser={props.currentUser}
          post_id={props.post_id}
          commentData={commentData}
          handleClick={props.handleClick} />
      )}
    </div>
  );
}

CommentContainer.propTypes = {
  currentUser: PropTypes.string.isRequired,
  post_id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string,
      text: PropTypes.string.isRequired,
      likes: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired
    }).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default CommentContainer;