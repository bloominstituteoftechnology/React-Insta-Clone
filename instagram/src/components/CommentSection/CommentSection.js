import React from 'react';
import IconBar from './IconBar.js'
import CommentFeed from'./CommentFeed.js'
import CommentForm from'./CommentForm.js'

const CommentSection= props => {
 
  return (
    <div id='commentSection'>
      CommentSection
        <IconBar likes={props.likes}></IconBar>
        <CommentFeed commentArray={props.commentArray}></CommentFeed>
        <CommentForm commentsUpdater={this.props.commentsUpdater} commentsEventHandler={this.props.commentsEventHandler}></CommentForm>
    </div>
  );
};

export default CommentSection;
