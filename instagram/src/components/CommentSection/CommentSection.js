import React from 'react';
import moment from 'moment';
import parseDate from '../../helperFunctions/helper';
import './CommentSection.css';

import PostStat from './PostStat';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = props => {
  return (
    <div className="post--comments">
      <PostStat likes={props.likes}/>
      {
        props.comments.map(
         (comment,i) => (
           <Comment
            username={props.username}
            key={i + props.username}
            comment={comment} />
      ))}
      <div className="post--time-stamp">
        {moment(parseDate(props.timestamp)).fromNow()}
      </div>
      <CommentForm
        commentText={props.commentText}
        onCommentFormChange={(e, u, t) => props.onCommentFormChange(e, u, t)}
        onCommentFormSubmit={(e, u, t) => props.onCommentFormSubmit(e, u, t)}
      />
    </div>
  );
}

export default CommentSection;