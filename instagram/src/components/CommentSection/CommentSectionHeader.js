import React from 'react';

const CommentSectionHeader = props => {
  return (
    <div>
      <p>{props.likes} likes</p>
    </div>
  );
};

export default CommentSectionHeader;
