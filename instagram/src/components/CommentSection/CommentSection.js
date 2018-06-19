import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div>
        <div className="comments-wrapper">
        {props.comments.map((c, i) => <Comment key={i} comment={c} />)}
        </div>
      <form className="add-comment">
        <input type="text" placeholder="Add a comment..." />
      </form>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
