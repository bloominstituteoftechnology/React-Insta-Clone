import React from 'react';
import CommentSectionHeader from './CommentSectionHeader';
import Comment from './Comment';

const CommentSection = props => {

  return (
    <div>
      <CommentSectionHeader likes={props.likes} />
      {props.comments.map(comment => <Comment key={comment.text} comment={comment}/>)}
      <form>
        <input placeholder="Add a comment..." />
      </form>
    </div>
  );
}

export default CommentSection;
