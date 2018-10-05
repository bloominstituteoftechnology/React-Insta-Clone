import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';
import CommentInput from './CommentInput';

const CommentSection = props => {
  return (
    <div className="CommentSection">
      {props.comments.comments.map((comment, i) => {
        return <Comment comment={comment} key={i} />;
      })}
      <div className="TimeStamp">2 Hours Ago</div>
      <CommentInput />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.object
};

export default CommentSection;
