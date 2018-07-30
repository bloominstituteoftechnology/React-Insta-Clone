import React from 'react';
import './comment.css';

import CommentDisplay from './CommentDisplay';

const CommentSection = props => {
  return(
    <div className="comment-section">
      {props.comments.map(comment => <CommentDisplay comment={comment} />)}
    </div>
  );
};

export default CommentSection;

//needs icon section and likes at top
//timestamp at bottom of comments
//commenting input - use todo header swapper


// {props.post.comments.map(comment => <CommentSection comment={comment} />)}
