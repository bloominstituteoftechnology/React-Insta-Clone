import React from 'react';
import './CommentSection.css';
import CommentUsername from './CommentUsername';
import CommentText from './CommentText';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return(
    <li className="comment">
      <CommentUsername username={props.username} />
      <CommentText text={props.text} />
    </li>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;