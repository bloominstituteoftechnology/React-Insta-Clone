import React from 'react';
import PropTypes from "prop-types";
import uuid from 'uuid/v1';
import './CommentSection.css';
import Comment from './Comment';
import moment from 'moment';

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map(comment => {
        return (
          <Comment key={uuid()}
                   comment={comment} />
        )
      })}
      <div className="timestamp">
        {moment().startOf('day').fromNow(props.timestamp).toUpperCase()}
      </div>
      <input placeholder="Add a comment..."></input>
    </div>
  );
};

CommentSection.propTypes = {
  postData: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.string
  })
};

export default CommentSection;
