import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';

import CommentDisplay from './CommentDisplay';

const CommentSection = props => {
  return(
    <div className="comment-section">
      {props.comments.map(comment => <CommentDisplay comment={comment} />)}
    </div>
  );
};

CommentSection.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
}

export default CommentSection;

//needs icon section and likes at top
//timestamp at bottom of comments
//commenting input - use todo header swapper
