import React from 'react';
import Comment from './Comment';
import './CommentsSection.css';
import PropTypes from 'prop-types';

const CommentsSection = (props) => {
  return (
      <div className="comments-section">
        {props.commentsArray.map(comment => <Comment username={comment.username} text={comment.text} key={comment.text} />)}
      </div>
    );
}

CommentsSection.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.object)
};
export default CommentsSection;
