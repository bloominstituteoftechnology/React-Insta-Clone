import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Style.css';

const CommentSection = props => {
  return (
  <div className="comment">
    <h4>{props.comment.username} <span className="timestamp">{moment(props.comment.timestamp, 'MMMM Do YYYY hh:mm:ss A').fromNow()}</span></h4>
    <p>{props.comment.text}</p>
  </div>
  );
}

CommentSection.propTypes = {
  comment: PropTypes.objectOf(PropTypes.string)
}

export default CommentSection;