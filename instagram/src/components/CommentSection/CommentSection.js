import React from 'react';
import IconBar from './IconBar.js'
import CommentFeed from'./CommentFeed.js'
import CommentForm from'./CommentForm.js'

const PostInstance= props => {
  return [
    <div>
        <IconBar></IconBar>
        <CommentFeed></CommentFeed>
        <CommentForm></CommentForm>
    </div>
  ];
};

export default PostInstance;
