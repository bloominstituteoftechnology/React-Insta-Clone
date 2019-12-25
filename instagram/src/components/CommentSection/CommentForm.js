import React from 'react';
import { InputWrapper, CommentInput } from './CommentsStyles';

const CommentForm = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <InputWrapper>
        <CommentInput
          type="text"
          placeholder="Add a comment..."
          name="newComment"
          value={props.newComment}
          onChange={props.commentHandler}
        ></CommentInput>

        <i className="fas fa-ellipsis-h fa-sm"></i>
      </InputWrapper>
    </form>
  );
};

export default CommentForm;