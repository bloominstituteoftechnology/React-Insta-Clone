import React from 'react';
import CommentSectionHeader from './CommentSectionHeader';

const CommentSection = props => {
  return (
    <div>
      <CommentSectionHeader likes={props.user.likes}/>
    </div>
  );
}

export default CommentSection;
