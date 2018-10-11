import React from 'react';
import styled from 'styled-components';
import { Input } from '../../Styles/Input';

const CommentForm = styled.form`
  position: relative;
`;

const CommentOptions = styled.div`
  position: absolute;
  top: 53%;
  left: 97%;
  font-size: 1.4rem;
`;

const CommentInput = ({ addNewComment, commentText, updateText, id }) => {
  return (
    <CommentForm onSubmit={e => addNewComment(e, id)}>
      <Input
        comment
        type="text"
        placeholder="Add a comment..."
        value={commentText}
        onChange={updateText}
      />
      <CommentOptions>
        <i className="fas fa-ellipsis-h" />
      </CommentOptions>
    </CommentForm>
  );
};

export default CommentInput;
