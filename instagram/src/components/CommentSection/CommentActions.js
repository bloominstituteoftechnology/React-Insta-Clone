import React from 'react';

import PropTypes from 'prop-types';

const CommentActions = ({ onClick }) => {
  return (
    <div className="post-comment-actions">
      <button onClick={onClick}><i className="far fa-heart" /></button>
      <i className="far fa-comment" />
    </div>
  );
}

CommentActions.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CommentActions;
