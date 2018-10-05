import React from 'react';
import Comment from './Comment';
import CommentActions from './CommentActions';
import CommentLikes from './CommentLikes';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <div className="post-comments">
      <CommentActions />
      <CommentLikes likes={props.likes} />
      {props.comments.map(user =>
        <Comment username={user.username} text={user.text} />
      )}
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.isRequired,
    })
  ).isRequired,
  likes: PropTypes.number.isRequired,
}

export default CommentSection;
