import React from 'react';
import IconBar from './IconBar.js'
import CommentFeed from'./CommentFeed.js'
import CommentForm from'./CommentForm.js'

const CommentSection= props => {
  return (
    <div id='commentSection'>
      CommentSection
        <IconBar></IconBar>
        <CommentFeed></CommentFeed>
        <CommentForm></CommentForm>
    </div>
  );
};

export default CommentSection;
