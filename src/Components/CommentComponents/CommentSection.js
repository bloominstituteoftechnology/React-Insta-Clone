import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';

import CommentDisplay from './CommentDisplay';

const CommentSection = props => {
  return(
    <div className="comment-section">
      <div className="icon-bar">
        <i className="far fa-heart icon"></i>
        <i className="far fa-comment icon icon-flipped"></i>
      </div>
      <div className="likes"><strong>{props.likes} likes</strong></div>
      {props.comments.map(comment => <CommentDisplay comment={comment} />)}
    </div>
  );
};

CommentSection.propTypes = {
  likes: PropTypes.number,
  text: PropTypes.string,
  username: PropTypes.string
}

export default CommentSection;

//needs icon section and likes at top
//timestamp at bottom of comments
//commenting input - use todo header swapper
