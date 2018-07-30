import React from 'react';
import CommentSectionHeader from './CommentSectionHeader';
import Comment from './Comment';

const CommentSection = props => {
  console.log(props.comments);
  return (
    <div>
      <CommentSectionHeader likes={props.likes} />
      {props.comments.map(comment => <Comment key={comment.text} comment={comment}/>)}
    </div>
  );
}

export default CommentSection;
