import React from 'react';
import PropTypes from 'prop-types';

const CommentInput = props => {
  return (
    <form>
      <input type="text" placeholder="Add comment... " />
    </form>
  );
};

CommentInput.propTypes = {
  commentKey: PropTypes.number,
}

export default CommentInput;
