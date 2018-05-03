import React from 'react';
import PropTypes from 'prop-types';

import "./CommentSection.css";

const CommentSection = ({ comments }) => {
  return (
    <div>
      { comments.map((comment, i) => 
          <div key={i} className="comment">
            <div className="message"><span className="name">{comment.username}</span>{comment.text}</div>
          </div>
      )}      
    </div>
  );
}

CommentSection.propTypes = { 
  comments: PropTypes.arrayOf(
      PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
      })
  )
}

export default CommentSection;
