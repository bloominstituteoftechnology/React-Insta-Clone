import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return(
    <div>

    </div>
  );

};

CommentSection.PropTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;