import React from 'react';

import {
  StyledCommentInput,
  StyledCommentsContainer
} from './CommentSectionStyle';

const CommentInput = props => {
  return (
    <StyledCommentInput
      onSubmit={props.addNewComment}
      onChange={props.handleChange}
    >
      <StyledCommentsContainer
        type="text"
        name="newComment"
        placeholder="Add comment..."
        value={props.newComment}
      />
    </StyledCommentInput>
  );
};

export default CommentInput;
