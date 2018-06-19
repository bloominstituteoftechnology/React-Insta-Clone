import React from 'react';
import PropTypes from "prop-types";
import uuid from 'uuid/v1';
import './CommentSection.css';
import Comment from './Comment';
import moment from 'moment';

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map(comment => <Comment key={uuid()} comment={comment} />)}
      <div className="timestamp">
        {moment().startOf('day').fromNow(props.timestamp).toUpperCase()}
      </div>
      <form onSubmit={props.onCommentSubmit}>
        <input placeholder="Add a comment..."></input>
      </form>
    </div>
  );
};

CommentSection.propTypes = {
  postData: PropTypes.shape({
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};

export default CommentSection;
