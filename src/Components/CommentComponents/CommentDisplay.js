import React from 'react';
import PropTypes from 'prop-types';
import { CommentPara } from './CommentStyle';

const CommentDisplay = props => {
  return(
    <div>
      <CommentPara><strong>{props.comment.username}</strong> {props.comment.text}</CommentPara>
    </div>
  );
};

CommentDisplay.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
}

export default CommentDisplay;
