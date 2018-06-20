import React from 'react';
import PropTypes from 'prop-types';

const CommentInput = props => {
  return (
    <form onSubmit={() => props.addNewComment(props.commentKey, {})}>
      <input type="text" 
              placeholder="Add comment... "
              value={props.commentText}
              onChange={props.updateComment} />
    </form>
  );
};

CommentInput.propTypes = {
  commentKey: PropTypes.number,
}

export default CommentInput;
