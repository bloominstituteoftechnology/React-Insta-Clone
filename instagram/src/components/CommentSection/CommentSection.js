import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
 const CommentSection = props => {
  return (
    <div className="Comment-container">
      {props.comments.map((comment, i) =>
        <div key={i}>
          <Comment comment={comment} />
        </div>
      )}
       <input type="text" placeholder="Add a comment" />
    </div>
  );
};
 CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};
 export default CommentSection;